export interface ComponentItem {
  id: string;
  name: string;
  category: string;
  quantity: number | string;
  spec: string;
  purpose: string;
  status: 'Installed' | 'Confirmed' | 'Available' | 'Suggested' | 'To Be Verified' | 'Required';
  verified: boolean;
  notes?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategory: 'Electronics' | 'Embedded Systems' | 'Digital Electronics' | 'AI / Computing' | 'Restoration' | 'Mechanical Design';
  shortDescription: string;
  status: 'Working prototype' | 'In progress' | 'Under development';
  year: string;
  technologies: string[];
  overview: string;
  problemStatement?: string;
  objectives: string[];
  designApproach?: string;
  workingPrinciple: string;
  architectureDiagram: string;
  implementationDetails: string;
  components: ComponentItem[];
  testingObservations: string;
  challenges: string;
  developmentStatus: string;
  futureImprovements: string;
  safetyWarning?: string;
  academicContext?: {
    course: string;
    semester: string;
    institution: string;
    department: string;
  };
}

export const initialProjects: Project[] = [
  {
    id: 'prj-01',
    number: 'PRJ-01',
    title: 'Mini Solid-State Tesla Coil',
    category: 'High Voltage Electronics',
    filterCategory: 'Electronics',
    shortDescription: 'A Slayer-excited high-voltage resonator producing corona discharge and small streamer arcs.',
    status: 'Working prototype',
    year: '2024',
    technologies: ['High Voltage', 'Resonance', 'RF Oscillations', 'Discrete Semiconductors'],
    overview: 'A compact solid-state Tesla coil built to study resonant high-voltage generation on a laboratory benchtop. The design uses a two-winding air-core transformer driven by a single-transistor self-oscillating Slayer exciter circuit, developing sufficient electrostatic potential to produce visible corona discharge and ionize surrounding noble gases.',
    problemStatement: 'Understanding radio-frequency resonance and high-voltage generation without expensive multi-kilovolt mains transformers or complex microcontrollers.',
    objectives: [
      'Construct a tightly coupled primary-secondary air-core RF transformer.',
      'Implement self-oscillating Slayer feedback switching without external clock generation.',
      'Demonstrate wireless power transmission via resonant magnetic and electrostatic field coupling.',
      'Document thermal and dielectric breakdown behavior of common bench materials.'
    ],
    designApproach: 'The secondary coil functions as a distributed LC resonant circuit. The base feedback loop senses electromagnetic oscillation and switches an NPN power transistor synchronously at secondary resonance (typically 1–2 MHz).',
    workingPrinciple: 'The Slayer exciter switches the primary coil at the natural resonant frequency of the secondary. Feedback picked up by the secondary base loop keeps the switching transistor in precise phase synchrony. Electrical energy builds on each cycle until the electric field gradient around the topload exceeds the dielectric breakdown threshold of air (~30 kV/cm), generating visible corona streamers.',
    architectureDiagram: `[ DC Power Supply (12–24V) ]
          │ (switched pulse train)
          ▼
[ Power Switching Transistor ] ◀─── (Phase Feedback Sync Loop) ──┐
          │                                                       │
          ▼                                                       │
[ Primary Coil (3-5 turns) ]                                      │
          │ (Mutual magnetic coupling / resonant rise)            │
          ▼                                                       │
[ Secondary Resonator (300+ turns) ] ─────────────────────────────┘
          │ (High potential gradient)
          ▼
   [ Topload Sphere / Spark Electrode ] ──> [ Corona streamer arcs ]`,
    implementationDetails: 'The secondary coil consists of several hundred turns of 0.2 mm enameled copper magnet wire close-wound over a 32 mm diameter PVC cylindrical pipe. The primary winding is composed of heavy insulated copper wire loosely wound around the base. The driver stage uses an NPN power transistor mounted on an extruded aluminum heatsink with thermal compound. The topload is a polished metallic sphere minimizing sharp edge premature discharge.',
    safetyWarning: 'HIGH VOLTAGE WARNING: Generates radio-frequency electric fields exceeding several thousand volts. Can produce RF burns, interfere with cardiac pacemakers, and damage unshielded digital electronics nearby.',
    components: [
      { id: 'c1-1', name: 'Switching Transistor', category: 'Transistors', quantity: 1, spec: 'NPN Power Type with Heatsink (e.g. BD139 / TIP31C)', purpose: 'Primary coil resonant switching', status: 'Installed', verified: true },
      { id: 'c1-2', name: 'Base Resistor', category: 'Resistors', quantity: 1, spec: '10 kΩ – 47 kΩ, 0.5W', purpose: 'Biasing between feedback winding and base', status: 'Installed', verified: true },
      { id: 'c1-3', name: 'Enameled Copper Wire', category: 'Materials', quantity: '1 spool', spec: '0.2 mm (32-34 AWG)', purpose: 'Secondary high-turn resonant winding', status: 'Confirmed', verified: true },
      { id: 'c1-4', name: 'PVC Former', category: 'Mechanical', quantity: 1, spec: '32 mm OD pipe section (~150 mm length)', purpose: 'Structural coil core', status: 'Confirmed', verified: true },
      { id: 'c1-5', name: 'Topload Sphere', category: 'Mechanical', quantity: 1, spec: 'Smooth metallic ball or toroid (~25 mm)', purpose: 'Terminal capacitance and breakout point', status: 'Available', verified: false },
      { id: 'c1-6', name: 'Bench Oscilloscope', category: 'Tools', quantity: 1, spec: '100 MHz bandwidth probe', purpose: 'Resonant frequency & rise-time verification', status: 'Suggested', verified: false }
    ],
    testingObservations: 'Bench testing conducted with progressive DC voltages from 9V to 18V. Ionization of low-pressure neon indicator lamps observed within a 15 cm radius. At 18V supply, corona streamers approximately 4–7 mm formed continuously from the electrode tip. Noted significant heat rise in the switching transistor after 90 seconds of continuous operation.',
    challenges: 'Initial setup failed to oscillate because the primary winding was wound reverse-phase relative to the secondary, causing degenerative feedback. Uneven secondary wire spacing created internal dielectric arcing between turns, necessitating rewinding and applying clear insulation lacquer.',
    developmentStatus: 'Working prototype — verified on the bench (2024).',
    futureImprovements: 'Integrate active thermal cutoff, measure precise resonant frequency via spectrum analyzer, implement a half-bridge MOSFET driver for improved duty cycle and streamer length.'
  },
  {
    id: 'prj-02',
    number: 'PRJ-02',
    title: 'Battery Level Indicator with LED Bar',
    category: 'Analog Electronics',
    filterCategory: 'Electronics',
    shortDescription: 'A segmented analog LED monitor displaying cell terminal voltage and state of charge.',
    status: 'Working prototype',
    year: '2024',
    technologies: ['Analog Electronics', 'Voltage Comparators', 'LED Driver', 'Threshold Sensing'],
    overview: 'A dependable multi-stage battery voltage level indicator designed to monitor real-time charge states for portable DC battery systems without relying on software controllers or analog-to-digital microcontrollers.',
    problemStatement: 'Preventing over-discharge of lithium or lead-acid batteries in field hardware by providing an instant, clear multi-colored visual readout of terminal voltage thresholds.',
    objectives: [
      'Design a stepped reference voltage ladder using precision resistor dividers.',
      'Provide discrete visual thresholds representing Full, Nominal, Low, and Critical battery levels.',
      'Maintain minimal quiescent current draw so the indicator does not drain the monitored cell.',
      'Enable easy recalibration for 3.7V Li-ion, 6V, or 12V packs.'
    ],
    workingPrinciple: 'The monitored battery voltage is stepped down through a calibrated resistive voltage divider and compared against stable reference voltage levels created by zener diodes or an internal bandgap reference. When the input voltage exceeds successive threshold levels, individual comparator stages switch, turning on corresponding colored LEDs sequentially in dot or bar mode.',
    architectureDiagram: `[ Battery Under Test ] ───> [ Voltage Divider Network ] ──┐
                                                           │
[ Precision Reference / Zener ] ──> [ Threshold Ladder ] ──┼──> [ Comparators ] ──> [ LED Bar Array (R/Y/G) ]`,
    implementationDetails: 'Implemented using either an analog comparator network (LM339 quad comparator) or dedicated display driver IC (LM3914) configured for dot/bar operation. Fine adjustment is handled by a multi-turn cermet potentiometer in the sensing divider.',
    components: [
      { id: 'c2-1', name: 'Indicator LEDs', category: 'LEDs', quantity: 5, spec: 'Green (2), Yellow (1), Red (2)', purpose: 'Stepped visual state of charge indication', status: 'Installed', verified: true },
      { id: 'c2-2', name: 'Current Limiting Resistors', category: 'Resistors', quantity: 5, spec: '470 Ω to 1 kΩ, 0.25W', purpose: 'LED forward current regulation', status: 'Installed', verified: true },
      { id: 'c2-3', name: 'Voltage Sensing Resistor Network', category: 'Resistors', quantity: 1, spec: '10 kΩ multi-turn trimmer + precision divider', purpose: 'Calibration of sensing window', status: 'Installed', verified: true },
      { id: 'c2-4', name: 'Comparator IC', category: 'Integrated Circuits', quantity: 1, spec: 'LM3914 / LM339 Quad Comparator', purpose: 'Voltage window threshold detection', status: 'Confirmed', verified: true },
      { id: 'c2-5', name: 'Zener Diode / Reference', category: 'Diodes', quantity: 1, spec: '2.5V precision reference (TL431) or Zener', purpose: 'Stable reference potential independent of supply drop', status: 'Available', verified: false }
    ],
    testingObservations: 'Calibrated for a single 18650 Li-ion cell (3.0V cutoff to 4.2V fully charged). Switching transitions between LED segments observed sharp with minimal hysteresis flutter.',
    challenges: 'Ensuring that indicator LEDs do not draw more current than the monitored battery when in standby. Solved by tuning bias resistor values and testing momentary push-to-read pushbuttons.',
    developmentStatus: 'Working prototype — bench tested on 1S and 3S battery systems.',
    futureImprovements: 'Add low-power sleep mode with momentary tactile test switch and reverse polarity protection Schottky diode.'
  },
  {
    id: 'prj-03',
    number: 'PRJ-03',
    title: 'ESP32 Mini Deskbot',
    category: 'Embedded Systems',
    filterCategory: 'Embedded Systems',
    shortDescription: 'A microcontroller desk companion featuring an OLED graphical interface, audio chirps, and servo motion.',
    status: 'In progress',
    year: '2025',
    technologies: ['ESP32', 'FreeRTOS', 'I2C OLED', 'PWM Servos', 'Firmware C++'],
    overview: 'An expressive, desktop companion robot powered by an ESP32 dual-core microcontroller. Incorporates an SSD1306 monochrome OLED display for visual emotional states, a magnetic buzzer for audio expressions, and micro servo actuators for physical head tilting.',
    problemStatement: 'Creating an affordable, fully open-source interactive desk device that bridges embedded hardware control, low-latency firmware scheduling, and human-device interaction.',
    objectives: [
      'Implement an efficient graphics frame buffer rendering facial expressions at 30 FPS on I2C OLED.',
      'Control multi-axis pan-tilt motion using hardware PWM timers on the ESP32.',
      'Create non-blocking audio chirp tone generation for feedback notifications.',
      'Design modular 3D-printed enclosure for desktop stability and aesthetic appeal.'
    ],
    workingPrinciple: 'The ESP32 runs a multi-threaded FreeRTOS firmware architecture. Core 0 handles network communication, sensor telemetry, and user input polling, while Core 1 executes the display graphics pipeline and PWM motor trajectory calculations, preventing screen stutter during servo actuation.',
    architectureDiagram: `[ 5V Power Supply / USB-C ] ──> [ AMS1117 3.3V LDO ] ──> [ ESP32 Dev Board ]
                                                              │
                                      ┌───────────────────────┼───────────────────────┐
                                      ▼                       ▼                       ▼
                              [ I2C Bus: SSD1306 ]     [ PWM: SG90 Servos ]     [ GPIO: Buzzer ]
                              (Eyes & Animations)      (Pan/Tilt Motion)        (Audio Chimes)`,
    implementationDetails: 'C++ firmware authored using the ESP-IDF / Arduino framework. Graphics rendered via the U8g2 library with custom bitmap frames. Micro servo motors run on dedicated 5V rails with capacitor smoothing to isolate the ESP32 from motor inductive noise.',
    components: [
      { id: 'c3-1', name: 'ESP32 Development Board', category: 'Microcontrollers', quantity: 1, spec: 'ESP32-WROOM-32 (30-pin / 38-pin)', purpose: 'Central dual-core processor and scheduler', status: 'Installed', verified: true },
      { id: 'c3-2', name: 'OLED Display Module', category: 'Displays', quantity: 1, spec: '0.96" 128x64 SSD1306 I2C Monochrome', purpose: 'Animated facial expressions & status HUD', status: 'Installed', verified: true },
      { id: 'c3-3', name: 'Micro Servos', category: 'Motors', quantity: 2, spec: 'SG90 9g Micro Servos', purpose: 'Head pan and tilt physical actuation', status: 'Available', verified: true },
      { id: 'c3-4', name: 'Piezo Buzzer', category: 'Audio', quantity: 1, spec: 'Passive 5V Piezo Element', purpose: 'Synthesized sound chimes & alerts', status: 'Installed', verified: true },
      { id: 'c3-5', name: 'Custom 3D Enclosure', category: 'Mechanical', quantity: 1, spec: 'PLA printed body chassis (AutoCAD / Fusion 360)', purpose: 'Internal mounting and chassis frame', status: 'To Be Verified', verified: false }
    ],
    testingObservations: 'OLED update loop achieved consistent 28–32 FPS over 400 kHz fast I2C. Servo step jitter minimized by adding a 470 µF decoupling capacitor across the 5V servo power rail.',
    challenges: 'Brownout detector resets occurred when both servos moved rapidly from USB power. Resolved by splitting motor and logic supply lines and beefing up decoupling capacitance.',
    developmentStatus: 'In active prototyping — firmware core operational, chassis modeling underway.',
    futureImprovements: 'Add capacitive touch sensors for head-pat detection, ambient light sensor for automatic brightness adjustment, and battery charging circuit for cord-free operation.'
  },
  {
    id: 'prj-04',
    number: 'PRJ-04',
    title: 'J.A.R.V.I.S Desktop Assistant',
    category: 'Local AI / Embedded Computing',
    filterCategory: 'AI / Computing',
    shortDescription: 'A voice-driven assistant interface and local computing experiment deployed on repurposed hardware.',
    status: 'In progress',
    year: '2025',
    technologies: ['Local AI', 'Speech Recognition', 'Python', 'Device Repurposing', 'Embedded Linux'],
    overview: 'An experimental voice-driven desktop assistant concept inspired by laboratory AI interfaces. Focuses on offline processing, structured device telemetry, and repurposing existing hardware—exploring the BlackBerry Z10 platform and local SBC micro-servers as dedicated companion terminals.',
    problemStatement: 'Most voice assistants depend entirely on external cloud platforms, exposing personal data and latency lag. This project explores offline, private intelligence on resource-constrained hardware.',
    objectives: [
      'Build a lightweight local intent-recognition pipeline requiring minimal memory.',
      'Explore running local models or tethered local compute to a dedicated display terminal.',
      'Develop audio capture and visual feedback states (listening, thinking, responding).',
      'Investigate the BlackBerry Z10 QNX/Android subsystem as an auxiliary hardware display.'
    ],
    workingPrinciple: 'Audio is captured via a localized microphone array, passed through a lightweight offline wake-word detector, transcribed via a quantized acoustic model, and mapped to local automation scripts or system status queries before returning synthesized voice feedback.',
    architectureDiagram: `[ Microphone Input ] ──> [ Wake-Word Engine (Local) ]
                                   │
                                   ▼
                       [ Quantized Speech Model ]
                                   │
                                   ▼
                   [ Local Intent Parser / Scripts ]
                                   │
                   ┌───────────────┴───────────────┐
                   ▼                               ▼
       [ Text-To-Speech Output ]       [ Status Display HUD ]
           (Audio Feedback)           (BlackBerry Z10 / Monitor)`,
    implementationDetails: 'The backend engine is developed in Python using lightweight quantized models. Hardware integration tests are exploring both direct serial/ADB communication and localized HTTP microservices for state updates.',
    components: [
      { id: 'c4-1', name: 'BlackBerry Z10 Handset', category: 'Hardware Platform', quantity: 1, spec: 'TI OMAP 4470 / Snapdragon S4, 2GB RAM', purpose: 'Dedicated interactive terminal & display candidate', status: 'Available', verified: true },
      { id: 'c4-2', name: 'Local Computing Host', category: 'Computing', quantity: 1, spec: 'x86 Mini PC / Linux SBC', purpose: 'Core AI model execution & voice transcription', status: 'Installed', verified: true },
      { id: 'c4-3', name: 'USB Audio Interface', category: 'Audio', quantity: 1, spec: 'Omnidirectional microphone + speaker amplifier', purpose: 'Voice acquisition and synthesized response', status: 'Installed', verified: true },
      { id: 'c4-4', name: 'AI Model Pipeline', category: 'Software', quantity: 1, spec: 'Quantized Whisper / Small LLM (to be verified)', purpose: 'Offline inference without cloud dependency', status: 'To Be Verified', verified: false }
    ],
    testingObservations: 'Baseline wake-word detection verified on local host with under 200 ms latency. Direct on-device LLM inference on the Z10 is heavily constrained by RAM; exploring hybrid tethered architecture where the Z10 acts as an intelligent peripheral.',
    challenges: 'BlackBerry Z10 OS (BB10 / QNX) has limited modern toolchain support and certificate expiration issues, making native app compilation non-trivial compared to standard Linux.',
    developmentStatus: 'In progress — exploring interface design and local audio engine.',
    futureImprovements: 'Develop standalone headless Python daemon, implement localized home automation relays, and create custom retro-futuristic HUD graphics.'
  },
  {
    id: 'prj-05',
    number: 'PRJ-05',
    title: 'Samsung MP3 Conversion',
    category: 'Hardware Restoration / Device Modification',
    filterCategory: 'Restoration',
    shortDescription: 'Breathing new life into a vintage Samsung Duos S5222 handset as a dedicated minimalist music player.',
    status: 'Working prototype',
    year: '2024',
    technologies: ['Hardware Hacking', 'Audio Amplification', 'Device Restoration', '3D Printing'],
    overview: 'A hardware conversion project transforming an obsolete 2012 Samsung GT-S5222 "Star 3 Duos" feature phone into an intentional, distraction-free retro audio player while preserving tactile buttons and mechanical integrity.',
    problemStatement: 'Millions of functional consumer electronics are discarded yearly. This project demonstrates component-level upcycling of obsolete handsets into dedicated single-purpose devices.',
    objectives: [
      'Preserve the original aesthetic and mechanical feel of the vintage handset.',
      'Integrate or rewire a dedicated lossless audio DAC/player module with SD card storage.',
      'Upgrade power system to modern rechargeable lithium cell with USB-C charging.',
      'Document mechanical disassembly and custom 3D printed internal bracket design.'
    ],
    workingPrinciple: 'The original phone chassis is carefully disassembled, retaining the front fascia, display window, and tactile navigation buttons. A compact high-fidelity MP3/DAC module is fitted into the internal cavity, wired to the mechanical buttons, and paired with an upgraded battery and modern charging controller.',
    architectureDiagram: `[ USB-C Power Input ] ──> [ TP4056 Li-Ion Charger ] ──> [ Replacement Li-Ion Cell ]
                                                              │
                                                              ▼
[ Tactile Button Matrix ] ──> [ Audio Decoder Core / MicroSD ] ──> [ PAM8403 / 3.5mm Jack ]
(Original Handset Keys)                (Lossless Audio)                  (Headphone / Speaker)`,
    implementationDetails: 'Custom internal mounting bracket modeled in AutoCAD and 3D printed in matte black PLA. Audio output wired to both a 3.5 mm TRS headphone socket and an internal micro-speaker. Powered by an upgraded single-cell 1000 mAh Li-Po battery with integrated protection board.',
    components: [
      { id: 'c5-1', name: 'Samsung GT-S5222 Handset', category: 'Chassis', quantity: 1, spec: 'Original 2012 Duos chassis and buttons', purpose: 'Physical housing, tactile keypads, and retro exterior', status: 'Installed', verified: true },
      { id: 'c5-2', name: 'Audio Decoder Module', category: 'Audio', quantity: 1, spec: 'Lossless MicroSD MP3/WAV Decoder Board', purpose: 'Dedicated audio playback engine', status: 'Confirmed', verified: true },
      { id: 'c5-3', name: 'Li-Ion Battery Cell', category: 'Power', quantity: 1, spec: '3.7V 800–1000 mAh Li-Po with PCM', purpose: 'Rechargeable power supply', status: 'Installed', verified: true },
      { id: 'c5-4', name: 'Charging Board', category: 'Power', quantity: 1, spec: 'TP4056 Type-C with battery protection', purpose: 'Safe USB-C charging and 4.2V cutoff', status: 'Installed', verified: true },
      { id: 'c5-5', name: 'Internal Brackets', category: 'Mechanical', quantity: 1, spec: '3D printed custom spacer chassis', purpose: 'Structural alignment of modules inside shell', status: 'Confirmed', verified: false }
    ],
    testingObservations: 'Achieved over 14 hours of continuous headphone playback on a single charge. Audio output shows minimal floor noise when decoupling capacitors are placed across the audio module supply pins.',
    challenges: 'Extremely cramped internal geometry inside the 12 mm phone shell. Required precision routing of enamel magnet wire and shaving down internal plastic standoffs to fit the USB-C socket.',
    developmentStatus: 'Working prototype — audio engine functional inside restored chassis.',
    futureImprovements: 'Wire the original resistance touchscreen or LCD for track name visualization, add Bluetooth audio transmission module.'
  },
  {
    id: 'prj-06',
    number: 'PRJ-06',
    title: 'Four-Bit Password System',
    category: 'Digital Electronics / Logic Design',
    filterCategory: 'Digital Electronics',
    shortDescription: 'A pure hardware digital security lock constructed from discrete 7400-series logic gates and transistor switches.',
    status: 'Working prototype',
    year: '2024',
    technologies: ['7400 Series TTL', 'Boolean Logic', 'Transistor Switching', 'Schematic Design'],
    overview: 'A digital electronic password lock built entirely from fundamental 7400-series TTL logic gates without any microcontroller or software. Verifies a 4-bit binary code against hardwired logic conditions and activates an electromagnetic lock relay on correct entry.',
    problemStatement: 'Understanding combinational logic circuits, truth tables, and gate propagation delays through hands-on breadboard synthesis rather than code abstraction.',
    objectives: [
      'Design combinational logic equations verifying a specific 4-bit binary combination.',
      'Synthesize logic using 7408 AND gates and 7404 NOT inverters.',
      'Interface TTL output levels to drive a high-current load via a BC547 BJT transistor switch.',
      'Implement dual-status LED indicators for Granted (Green) and Denied (Red) states.'
    ],
    workingPrinciple: 'A 4-bit DIP switch or push-button register feeds digital input signals (A, B, C, D) to a combinational logic matrix. Inverters (7404) invert bits that must be LOW for the correct key, and a cascade of 2-input AND gates (7408) computes the overall product term. When and only when all conditions are satisfied, the logic output goes HIGH, biasing the BC547 transistor into saturation to energize the status indicator or relay coil.',
    architectureDiagram: `[ 4-Bit Inputs: A, B, C, D ]
            │
            ├──────────────┐
            ▼              ▼
   [ 7404 NOT Gates ]   [ Direct High Inputs ]
            │              │
            └──────┬───────┘
                   ▼
         [ 7408 AND Logic Array ]
                   │
                   ▼ (Single Match Bit: HIGH on valid code)
         [ BC547 Transistor Switch ]
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
[ Green LED / Relay ]   [ Red Inverted LED ]
  (Access Granted)        (Access Denied)`,
    implementationDetails: 'Assembled on high-density breadboards using 3x 7408 AND ICs and 1x 7404 NOT IC. Inputs are held LOW through 10 kΩ pull-down resistors to prevent floating CMOS/TTL states. Switching is governed by a BC547 NPN transistor with a 1 kΩ base resistor and clamp diode.',
    components: [
      { id: 'c6-1', name: '7408 Quad 2-Input AND Gate IC', category: 'Integrated Circuits', quantity: 3, spec: 'SN74HC08 / 74LS08 (DIP-14)', purpose: 'Combinational product-term logic verification', status: 'Installed', verified: true },
      { id: 'c6-2', name: '7404 Hex Inverter IC', category: 'Integrated Circuits', quantity: 1, spec: 'SN74HC04 / 74LS04 (DIP-14)', purpose: 'Logic inversion of active-low password bits', status: 'Installed', verified: true },
      { id: 'c6-3', name: 'BC547 NPN Transistor', category: 'Transistors', quantity: 2, spec: 'TO-92 NPN BJT', purpose: 'Output stage switching for relay / indicator', status: 'Installed', verified: true },
      { id: 'c6-4', name: 'Biasing Resistors', category: 'Resistors', quantity: 6, spec: '10 kΩ pull-downs and 1 kΩ base resistors', purpose: 'Stable logic level definition and base drive', status: 'Installed', verified: true },
      { id: 'c6-5', name: 'Status LEDs', category: 'LEDs', quantity: 2, spec: '5 mm Red and Green LEDs with 330 Ω ballast', purpose: 'Visual access granted / denied feedback', status: 'Installed', verified: true },
      { id: 'c6-6', name: '5V Voltage Regulator', category: 'Power', quantity: 1, spec: 'LM7805 Linear Regulator (DIP/TO-220)', purpose: 'Stable 5.0V TTL power rail regulation', status: 'Confirmed', verified: true }
    ],
    testingObservations: 'All 16 input combinations (0000 to 1111) systematically tested. The circuit triggered access granted strictly on the pre-programmed 4-bit key with zero false-positive states. Measured propagation delay through gate cascade was under 40 nanoseconds.',
    challenges: 'Floating input pins initially produced erratic trigger behavior due to high input impedance; solved by adding reliable 10 kΩ pull-down resistors to ground on all switch terminals.',
    developmentStatus: 'Working prototype — validated on laboratory breadboard.',
    futureImprovements: 'Add a 74LS193 up/down counter for an attempt-limiter and lockout alarm after three incorrect inputs.'
  },
  {
    id: 'prj-07',
    number: 'PRJ-07',
    title: 'Vintage Watch Restoration & Redesign',
    category: 'Mechanical Restoration / Product Design',
    filterCategory: 'Mechanical Design',
    shortDescription: 'Teardown, ultrasonic cleaning, mechanical analysis, and custom casing for classic automatic horology.',
    status: 'In progress',
    year: '2025',
    technologies: ['Precision Horology', 'Ultrasonic Cleaning', 'Micro-mechanics', 'Product Design'],
    overview: 'A hands-on mechanical restoration and design study focusing on classic mechanical timepieces: the Citizen Eagle 7 (automatic cal. 8200) and the Seiko 66-7100P (manual wind cal. 66A). Explores escapement mechanics, balance wheel dynamics, micro-lubrication, and reimagined custom casing.',
    problemStatement: 'Understanding intricate mechanical precision engineering, tolerance management, and kinetic energy storage through horological restoration.',
    objectives: [
      'Perform non-destructive disassembly of vintage mechanical watch movements.',
      'Inspect escapement, gear train, balance spring, and click springs under optical magnification.',
      'Execute multi-stage ultrasonic degreasing and re-lubrication to restore amplitude.',
      'Model precision replacement case geometry in AutoCAD / 3D CAD.'
    ],
    workingPrinciple: 'Mechanical watches harness energy stored in a coiled mainspring inside the mainspring barrel. Energy is metered out in discrete ticks via the escapement wheel and pallet fork to the balance wheel oscillator, which pulses at a resonant frequency (typically 18,000 or 21,600 beats per hour) to drive the reduction gear train.',
    architectureDiagram: `[ Mainspring Energy Barrel ]
              │ (Stored kinetic torque)
              ▼
    [ Gear Train / Wheels ]
   (Center -> Third -> Fourth)
              │
              ▼
      [ Escapement Wheel ]
              │ (Controlled impulse)
              ▼
   [ Pallet Fork & Jewels ] ◀─── (Oscillation Feedback) ───┐
              │                                            │
              ▼                                            │
 [ Balance Wheel & Hairspring ] ───────────────────────────┘
   (Resonant mechanical tick ~3 Hz)`,
    implementationDetails: 'Movements are secured in dedicated movement holders under stereoscopic inspection. Components undergo three-bath cleaning (naphtha/degreaser, isopropyl rinse, dry air). Moebius specialized horological lubricants applied via fine oiler wire.',
    components: [
      { id: 'c7-1', name: 'Citizen Eagle 7 Watch', category: 'Timepieces', quantity: 1, spec: 'Miyota/Citizen 8200 automatic 21 jewels', purpose: 'Automatic mechanical restoration candidate', status: 'Available', verified: true },
      { id: 'c7-2', name: 'Seiko 66-7100P Watch', category: 'Timepieces', quantity: 1, spec: 'Seiko 66A manual-wind 17 jewels', purpose: 'Manual mechanical movement restoration', status: 'Available', verified: true },
      { id: 'c7-3', name: 'Watchmaker Tweezers & Screwdrivers', category: 'Tools', quantity: 1, spec: 'Dumoxel #3 tweezers, 0.8–1.4mm screwdrivers', purpose: 'Precision micro-mechanical disassembly', status: 'Installed', verified: true },
      { id: 'c7-4', name: 'Ultrasonic Cleaner & Solvents', category: 'Chemicals', quantity: 1, spec: 'Ultrasonic tank + specialized cleaning solutions', purpose: 'Degreasing dried oils and debris from pivots', status: 'Available', verified: true },
      { id: 'c7-5', name: 'Replacement Gaskets & Mineral Glass', category: 'Parts', quantity: 'Various', spec: 'O-ring case-back gaskets and domed acrylic/mineral crystals', purpose: 'Environmental sealing and scratch-free dial view', status: 'To Be Verified', verified: false }
    ],
    testingObservations: 'Seiko 66 movement resumed ticking following initial balance bridge inspection and dry debris removal. Amplitude measured acoustically using a microphone pickup and horology timing software.',
    challenges: 'Microscopic screw heads (sub-millimeter) are easily stripped or lost. Balance hairspring is delicate and vulnerable to magnetic clinging and bent overcoil geometry.',
    developmentStatus: 'In progress — movements cleaned, case redesign and reassembly underway.',
    futureImprovements: 'Design and CNC machine / 3D print a custom transparent exhibition caseback, log daily rate deviation (seconds/day) on a timegrapher.'
  },
  {
    id: 'prj-08',
    number: 'PRJ-08',
    title: 'Fastest Finger First',
    category: 'Digital / Timer Electronics',
    filterCategory: 'Digital Electronics',
    shortDescription: 'A multi-participant quiz buzzer circuit employing monostable NE555 timers and diode lockout feedback.',
    status: 'Working prototype',
    year: '2025',
    technologies: ['NE555 Timer', 'Monostable Mode', 'Diode Feedback Latch', 'SRMIST 21ECC211L Lab'],
    overview: 'A responsive quiz buzzer circuit designed to identify and lock in the first participant to press a button among competitors. Built and validated during laboratory coursework at SRM Institute of Science and Technology.',
    problemStatement: 'Resolving simultaneous participant response conflicts in quiz environments without expensive programmable controllers, ensuring strictly fair first-come-first-served lockout.',
    objectives: [
      'Identify the first participant to press a push button with microsecond-level electronic gating.',
      'Provide immediate visual latching indication of the winning response via an LED.',
      'Prevent subsequent participant button presses from being registered once a winner is latched.',
      'Understand NE555 timer ICs operating in monostable multivibrator mode.',
      'Demonstrate diode-based isolation and common feedback locking rails.'
    ],
    academicContext: {
      course: '21ECC211L — Devices and Digital IC Lab',
      semester: 'III Semester, 2026–27',
      institution: 'SRM Institute of Science and Technology',
      department: 'Department of Electronics and Communication Engineering'
    },
    workingPrinciple: 'Each participant station has an independent momentary button connected to the trigger pin (Pin 2) of an individual NE555 timer IC wired in monostable mode. When Participant 1 presses their button, Pin 2 is pulled below 1/3 Vcc, forcing Output (Pin 3) HIGH to illuminate their winning LED. Simultaneously, this HIGH signal is coupled via a 1N4148 fast-switching diode to a shared common feedback bus. The feedback bus pulls down or clamps the trigger lines of all competing modules, disabling them until a master supervisor Reset button is depressed.',
    architectureDiagram: `[ DC Power Supply: Stated 5–12V ]
             │
             ├───────────────────────────────────────────────────────┐
             │                                                       │
             ▼                                                       ▼
[ Participant 1 Push Button ]                           [ Participant 2 / 3 Push Buttons ]
             │                                                       │
             ▼                                                       ▼
[ NE555 Module 1 (Pin 2 Trig) ]                         [ NE555 Module 2 / 3 (Pin 2 Trig) ]
             │                                                       │
             ▼                                                       ▼
   [ Output Pin 3: HIGH ]                                    [ Inhibited / Off ]
             │
             ├─────────────> [ Winning LED 1: ON ]
             │
             ▼ (1N4148 Diode Feedback)
[ Shared Lockout Feedback Bus ] ═════════════════════════════════════╝
(Inhibits other timers from triggering)
             ▲
             │
   [ Master Reset Button ] ──> (Restores circuit for next round)`,
    implementationDetails: 'Assembled on a standard breadboard using 4x NE555 ICs, 1N4148 high-speed switching diodes, 5x momentary pushbuttons, and precision metal-film resistors. Note on technical accuracy: While the core system demonstrates 3 active participant modules, 4 NE555 ICs and 5 buttons were retained from the laboratory inventory to allow expansion.',
    components: [
      { id: 'c8-1', name: 'NE555 Timer IC', category: 'Integrated Circuits', quantity: 4, spec: 'NE555P 8-Pin DIP Timer', purpose: 'Monostable pulse and latch control elements', status: 'Installed', verified: true },
      { id: 'c8-2', name: 'Momentary Push Buttons', category: 'Switches', quantity: 5, spec: '4-Pin tactile PCB switches', purpose: 'Participant inputs and supervisor master reset', status: 'Installed', verified: true },
      { id: 'c8-3', name: '1N4148 Diodes', category: 'Diodes', quantity: 4, spec: 'High-speed silicon switching diodes', purpose: 'Unidirectional feedback isolation and bus latching', status: 'Installed', verified: true },
      { id: 'c8-4', name: 'Indicator LEDs', category: 'LEDs', quantity: 5, spec: '5 mm Diffused LEDs (Red/Green/Yellow)', purpose: 'Immediate visual feedback for participant state', status: 'Installed', verified: true },
      { id: 'c8-5', name: 'Current Limiting Resistors', category: 'Resistors', quantity: 5, spec: '270 Ω, 0.25W metal film', purpose: 'Forward current limiting for indicator LEDs', status: 'Installed', verified: true },
      { id: 'c8-6', name: 'Pull-up / Network Resistors', category: 'Resistors', quantity: 4, spec: '10 kΩ, 0.25W', purpose: 'Trigger pin voltage stabilization', status: 'Installed', verified: true },
      { id: 'c8-7', name: 'Reset / Status Rail Resistors', category: 'Resistors', quantity: 2, spec: '1 kΩ, 0.25W', purpose: 'Feedback rail pull-down and reset line stability', status: 'Installed', verified: true },
      { id: 'c8-8', name: 'Piezo Buzzer (Audible Tone)', category: 'Audio', quantity: 1, spec: '5V Active Buzzer', purpose: 'Audible winning tone (to be verified in final BOM)', status: 'Suggested', verified: false }
    ],
    testingObservations: 'Demonstrated reliable millisecond lockout in lab testing: when two buttons were pressed nearly simultaneously, the faster signal claimed the output rail while the slower module remained locked out. Circuit operated smoothly across 5V to 9V bench supply rails.',
    challenges: 'Switch contact bounce occasionally caused multi-triggering before steady state; solved by tuning the RC timing network on Pin 6/7 threshold inputs.',
    developmentStatus: 'Completed and verified — Devices & Digital IC Lab (SRMIST).',
    futureImprovements: 'Fabricate an etched single-sided PCB with RJ11 modular jacks for remote handheld participant buzzers, and add a 7-segment display showing the winner number.'
  }
];
