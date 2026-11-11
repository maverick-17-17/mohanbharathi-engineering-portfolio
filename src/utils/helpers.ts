import type { ComponentItem } from '../data/projects';

/**
 * Exports an array of components to a CSV bill-of-materials file.
 */
export function exportBOMToCSV(projectTitle: string, components: ComponentItem[]) {
  const headers = ['Component Name', 'Category', 'Quantity', 'Specification', 'Purpose', 'Status', 'Verified'];
  const rows = components.map(c => [
    `"${c.name.replace(/"/g, '""')}"`,
    `"${c.category.replace(/"/g, '""')}"`,
    `"${c.quantity}"`,
    `"${c.spec.replace(/"/g, '""')}"`,
    `"${c.purpose.replace(/"/g, '""')}"`,
    `"${c.status}"`,
    c.verified ? 'Yes' : 'No'
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${projectTitle.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_bom.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Copies text to the clipboard with modern fallback.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
    return false;
  }
}
