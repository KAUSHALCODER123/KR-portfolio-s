/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG  —  edit everything here. No need to touch the components.
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  Swap the doctor's name, photo, phone, address, services, reviews, etc.
 *  All sections of the page read from this file.
 */

export const config = {
  // ── Doctor identity ────────────────────────────────────────────────────
  doctor: {
    name: 'Dr. Priya Sharma',
    // Honorific line shown under the name in the hero.
    // PLACEHOLDER — replace with Dr. Sharma's actual degrees.
    qualifications: 'MBBS, MD (Pediatrics)',
    specialization: 'Pediatrician & Child Health Specialist',
    // Place the image at  public/photos/dr-priya.jpg  to make this show.
    // If the file is missing, the page falls back to the initials placeholder.
    photo: '/photos/dr-priya.jpg',
    // PLACEHOLDER — adjust to the real number of years.
    yearsExperience: 12,
  },

  // ── Contact / booking ──────────────────────────────────────────────────
  contact: {
    // WhatsApp: international format, digits only (91 = India + the number).
    whatsapp: '919820000000',
    // Human-readable phone for display + tel: link.
    phoneDisplay: '+91 98200 00000',
    // PLACEHOLDER — replace with the real clinic email.
    email: 'appointments@drpriyasharma.in',
    // Pre-filled WhatsApp message when a patient taps "Book Appointment".
    whatsappMessage:
      "Hello Dr. Sharma's clinic, I'd like to book an appointment for my child.",
  },

  // ── Clinic ─────────────────────────────────────────────────────────────
  clinic: {
    name: 'Dr. Priya Sharma — Child Care Clinic',
    addressLines: [
      'Shop 4, Shanti Complex',
      'Mira Road East',
      'Mumbai, Maharashtra 401107',
    ],
    // PLACEHOLDER MAP — currently points at a search for the clinic area.
    // For an exact pin: Google Maps → Share → "Embed a map" → copy the src URL.
    mapEmbedUrl:
      'https://www.google.com/maps?q=Shanti+Complex+Mira+Road+East+Mumbai&output=embed',
    // Plain link to open the location in Google Maps.
    mapLink: 'https://maps.google.com/?q=Shanti+Complex+Mira+Road+East+Mumbai',
  },

  // ── Consultation timings (shown as a table) ────────────────────────────
  timings: [
    { day: 'Monday – Saturday', morning: '10:00 AM – 1:00 PM', evening: '5:00 PM – 8:00 PM' },
    { day: 'Sunday', morning: 'Closed', evening: 'Closed' },
  ],

  // ── About ──────────────────────────────────────────────────────────────
  // PLACEHOLDER COPY — replace with Dr. Sharma's real bio & credentials.
  about: {
    bio: [
      'Dr. Priya Sharma is a dedicated pediatrician with over 12 years of experience caring for children from their very first days through the teenage years. She is known for her warm, patient manner that puts both little ones and anxious parents at ease.',
      'Her practice covers the full spectrum of child health — routine consultations, complete immunisation, treatment of common childhood illnesses, and careful monitoring of growth and development milestones.',
    ],
    credentials: [
      'MBBS — Grant Medical College, Mumbai',
      'MD, Pediatrics — Seth G.S. Medical College',
      'Member, Indian Academy of Pediatrics (IAP)',
    ],
    affiliations: [
      'Consultant Pediatrician, Wockhardt Hospital',
      'Visiting Pediatrician, Bhaktivedanta Hospital',
      'Member, Indian Medical Association (IMA)',
    ],
  },

  // ── Services (4–6 cards). icon = key from the icon set in Services.astro ─
  services: [
    {
      icon: 'child',
      title: 'Child Consultation',
      description:
        'Thorough check-ups and friendly, reassuring care for newborns, toddlers, and teens.',
    },
    {
      icon: 'shield',
      title: 'Vaccination',
      description:
        'Complete immunisation schedules as per IAP guidelines, with gentle handling and reminders.',
    },
    {
      icon: 'thermometer',
      title: 'Fever & Infection',
      description:
        'Prompt diagnosis and treatment of common childhood fevers, coughs, and infections.',
    },
    {
      icon: 'pulse',
      title: 'Growth Monitoring',
      description:
        'Tracking height, weight, and developmental milestones to keep your child thriving.',
    },
  ],

  // ── Patient reviews (3 cards) ──────────────────────────────────────────
  // PLACEHOLDER REVIEWS — swap with real parent testimonials.
  reviews: [
    {
      name: 'Sneha M.',
      rating: 5,
      text: 'Dr. Priya is wonderful with kids. My daughter actually looks forward to her visits now. Calm, thorough, and never rushed.',
    },
    {
      name: 'Imran Q.',
      rating: 5,
      text: 'She explained my son’s vaccination schedule clearly and sends timely reminders. Very reassuring for first-time parents.',
    },
    {
      name: 'Kavita R.',
      rating: 5,
      text: 'Caught a growth issue early during a routine checkup. Genuinely attentive doctor — highly recommend her for any child.',
    },
  ],

  // ── Footer ─────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Gentle, expert care for your child at every stage.',
  },
};

export default config;
