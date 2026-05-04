var GOHAM_CONFIG = {

  /* ════════════════════════════════════════════════════════════
     SHARED — used across ALL pages
     (church name, address, contact info, social links)
  ════════════════════════════════════════════════════════════ */

  "church": {
    "name":     "GOHAM Church",
    "address":  "GOHAM HQ — Kwacha East, Milambo Rd, Kitwe, Zambia",
    "phone":    "+260 961 227 416",
    "email":    "gohamtvzambia@gmail.com",
    "whatsapp": "+260 961 227 416",
    "youtube":  "https://www.youtube.com/@GOHAMHQ",
    "facebook": "https://www.facebook.com/gohamhq"
  },


  /* ════════════════════════════════════════════════════════════
     INDEX.HTML — homepage sections
  ════════════════════════════════════════════════════════════ */

  /* ── Hero banner (top of homepage) ── */
  "hero": {
    "eyebrow":  "Welcome to GOHAM",
    "title":    "Gates of Heaven Almighty Ministries International",
    "subtitle": "A place of worship, community, and grace for all who seek Jesus Christ."
  },

  /* ── Service times summary block (homepage) ── */
  "services": {
    "sunday_morning":           "08:00 – 14:00",
    "friday_evening":           "15:00 – 18:00",
    "womens_ministry_thursday": "14:00 – 18:00"
  },

  /* ── Events carousel (homepage) ──
     Each entry needs: title, date, desc, image path.         */
  "events": [
    {
      "title": "Month of Greater Grace",
      "date":  "May 2026",
      "desc":  "This May we declare the theme of Greater Grace. Come expecting a Notable Miracle as we gather in worship, prayer, and the power of His Word.",
      "quote": "And with great power the apostles gave witness to the resurrection of the Lord Jesus. And great grace was upon them all. — Acts 4:33",
      "image": "images/event-1.jpg"
    },
    {
      "title": "Sunday Service",
      "date":  "Sunday's 2026",
      "desc":  "An evening of thanksgiving, music, and fellowship. Bring the whole family.",
      "image": "images/event-2.jpg"
    },
    {
      "title": "Youth Camp 2026",
      "date":  "2026",
      "desc":  "An exciting week away for teens and young adults. Registration opens soon.",
      "image": "images/event-3.jpg"
    }
  ],

  /* ── About section (homepage) ── */
  "about": {
    "history": "Founded January 3rd 2016, GOHAM Community Church has been a cornerstone of faith and community in our region. What began as a small gathering of believers has grown into a vibrant congregation united by love, service, and the living Word of Jesus Christ.",
    "extra":   "We believe that every person has worth and dignity, and that Jesus is the hope of the world. Through Him, our doors are open to all."
  },

  /* ── Pastor card (homepage About section + team.html) ──────
     photo: path WITHOUT file extension — the site automatically
     tries .jpg, .jpeg, .png, and .webp until it finds the file. */
  "pastor": {
    "name":  "Bishop Simon K Christic",
    "role":  "Bishop",
    "bio":   "Serving GOHAM Community Church since 2016, Bishop Simon leads with a heart for the community and a passion for Biblical teaching.",
    "photo": "images/teams/SimonKolando"
  },

  /* ── Core values / mission pillars (homepage) ──────────────
     icon: SVG path string drawn inside a 24×24 viewBox.      */
  "values": [
    {
      "title": "Worship",
      "desc":  "We gather to honour Jesus through heartfelt worship, prayer, and the study of Scripture together as a family of believers.",
      "icon":  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    },
    {
      "title": "Community",
      "desc":  "We are stronger together in Jesus. Through fellowship, small groups, and shared meals, we build lasting relationships rooted in faith.",
      "icon":  "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
    },
    {
      "title": "Service",
      "desc":  "Faith in Jesus without action is incomplete. We serve our local community through outreach, care programmes, and acts of compassion in His name.",
      "icon":  "M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
    }
  ],

  /* ── Donations / Give section (homepage) ───────────────────
     Each method: method (heading), label, details[], links[]. */
  "donations": [
    {
      "method":  "Online Payment",
      "label":   "International Online Giving",
      "details": [
        "PayPal: giving@gohamhq.org"
      ],
      "links": [
        { "url": "#",                           "text": "Give via PayPal →" },
        { "url": "PASTE_FLUTTERWAVE_LINK_HERE", "text": "Give via Flutterwave →" }
      ]
    },
    {
      "method":  "Mobile Money",
      "label":   "AirTel / MTN Mobile",
      "details": [
        "AirTel: To Be Announced",
        "MTN: 0967243950",
        "Registered to: Boniface Chibwabwa"
      ]
    },
    {
      "method":  "Bank Transfer / EFT",
      "label":   "Direct Deposit",
      "details": [
        "Bank: Stanbic",
        "Account Name: Simon Kolando and Boniface Chibwabwa",
        "Account No: 9130005952186",
        "Branch Code: 040514",
        "Swift Code: SBICZMLX"
      ]
    }
  ],

  /* ── Shared image assets (logo + homepage banners) ──────────
     Images and videos used on the homepage.                   */
  "images": {
    "logo":    "images/GohamLight.png",
    "banner1": "images/banner.jpg",
    "banner2": "images/banner-2.jpg",

    /* ── Worship video (index.html — between About & Mission) ──
       Full-width background video. Extension required (.mp4).
       Leave as "" to show a plain gradient background instead. */
    "worshipVideo": "images/worship-1.mp4",

    /* ── Banner reel strip (index.html — below hero) ───────────
       Images/videos that scroll across the reel strip.
         • Images — extension optional; the resolver tries .jpg /
           .jpeg / .png / .webp / .mp4 / .webm automatically.
         • Videos — extension REQUIRED (e.g. .mp4, .webm, .mov).
       Add as many items as you like; they loop seamlessly.    */
    "bannerReel": [
      "images/reel1-1",
      "images/reel1-2",
      "images/reel1-3",
      "images/reel1-4",
      "images/reel1-5",
      "images/reel1-6",
    ],

    /* ── Second reel strip (strip-2 — Pure Word/Worship/Deliverance section) ──
       Completely independent from bannerReel above.
       Add your own images/videos here — same rules apply:
         • Images — extension optional (resolver tries .jpg/.jpeg/.png/.webp).
         • Videos — extension REQUIRED (e.g. .mp4, .webm).              */
    "bannerReel2": [
      "images/reel2-1",
      "images/reel2-2",
      "images/reel2-3",
      "images/reel2-4",
      "images/reel2-5"
    ]
  },


  /* ════════════════════════════════════════════════════════════
     PROGRAMS.HTML — weekly schedule + department spotlights
  ════════════════════════════════════════════════════════════ */

  /* ── Weekly schedule table ──────────────────────────────────
     Each row: day, service, time.
     anchor (optional): when set, the row becomes a clickable
       link that scrolls to the matching department card below
       the schedule. The value must match the <article id="…">
       in programs.html (i.e. "dept-sunday-school" etc).       */
  "schedule": [
    { "day": "Sunday",             "service": "Sunday Service",      "time": "08:00 – 14:00" },
    { "day": "Sunday",             "service": "Sunday School",       "time": "10:00 – 11:00", "anchor": "dept-sunday-school" },
    { "day": "Sunday",             "service": "Youth Ministry",      "time": "14:00 – 15:30", "anchor": "dept-youth"         },
    { "day": "Monday",             "service": "Monday Intercessory", "time": "16:00 – 18:00", "anchor": "dept-intercessory"  },
    { "day": "Tuesday & Saturday", "service": "Praise Rehearsals",   "time": "15:00 – 18:00" },
    { "day": "Thursday",           "service": "Women's Meeting",     "time": "14:00 – 18:00" },
    { "day": "Friday",             "service": "Prophetic Service",   "time": "15:00 – 18:00" },
    { "day": "Saturday",           "service": "Ushers Meeting",      "time": "15:00 – 18:00" }
  ],

  /* ── Department spotlight cards (programs.html) ─────────────
     Each department needs:
       id       — must match the <article id="dept-…"> in HTML
       eyebrow  — small label shown above the title
       title    — department name
       day      — when they meet
       time     — meeting time
       images[] — filenames inside the images/ folder.
                  Minimum 3 per department.
                  Videos must include their extension (.mp4).  */
  "departments": [
    {
      "id":      "sunday-school",
      "eyebrow": "Children's Ministry",
      "title":   "Sunday School",
      "day":     "Every Sunday",
      "time":    "10:00 – 11:00",
      "images": [
        "images/sunday-school-1.jpg",
        "images/sunday-school-2.jpg",
        "images/sunday-school-3.jpg"
      ]
    },
    {
      "id":      "intercessory",
      "eyebrow": "Prayer Ministry",
      "title":   "Goham Intercessory",
      "day":     "Weekly Intercession",
      "time":    "Monday · 16:00 – 18:00",
      "images": [
        "images/intercessory-1.jpg",
        "images/intercessory-2.jpg",
        "images/intercessory-3.jpg"
      ]
    },
    {
      "id":      "youth",
      "eyebrow": "Young People's Ministry",
      "title":   "Youth Ministry",
      "day":     "Sunday — After Service",
      "time":    "14:00 – 15:30",
      "images": [
        "images/youth-1.jpg",
        "images/youth-2.jpg",
        "images/youth-3.jpg"
      ]
    },
    {
      "id":      "worship-team",
      "eyebrow": "Music & Worship",
      "title":   "Worship Team",
      "day":     "Tuesday & Saturday",
      "time":    "15:00 – 18:00",
      "images": [
        "images/worship-1.mp4",
        "images/worship-2.jpg",
        "images/worship-3.jpg",
        "images/worship-4.jpg"
      ]
    }
  ],


  /* ════════════════════════════════════════════════════════════
     TEAM.HTML — full team roster
  ════════════════════════════════════════════════════════════ */

  /* ── Team member cards ──────────────────────────────────────
     Each member: name, role, photo, group.
     photo: path WITHOUT file extension — the site automatically
     tries .jpg, .jpeg, .png, and .webp until it finds the file.
     group: controls which section they appear under on team.html.
     Available groups (in display order):
       "Leadership" | "Women's Ministry" | "Ushers & Youth" | "Media Team"  */
  "team": [
    { "name": "Bishop Simon K Christic",    "role": "Bishop",                 "group": "Leadership",     "photo": "images/teams/SimonKolando"      },
    { "name": "Dr. Reverend Mercy Kolando", "role": "Reverend",               "group": "Leadership",     "photo": "images/teams/MercyKolando"      },
    { "name": "Brother Boniface Chibwabwa", "role": "Financial Minister",     "group": "Leadership",     "photo": "images/teams/BonifaceChibwabwa" },
    { "name": "Brother Abel Kolando",       "role": "Minister / Intercessor", "group": "Leadership",     "photo": "images/teams/AbelKolando"       },
    { "name": "Elder Danny Lufundisha",     "role": "Elder",                  "group": "Leadership",     "photo": "images/teams/DannyLufundisha"   },
    { "name": "Elder Edith Chipandwe",      "role": "Women's Ministry",       "group": "Women's Ministry","photo": "images/teams/EdithChipandwe"   },
    { "name": "Sister Keturah Zepeda",      "role": "Women's Ministry",       "group": "Women's Ministry","photo": "images/teams/KeturahZepeda"    },
    { "name": "Sister Miranda Chipandwe",   "role": "Women's Ministry",       "group": "Women's Ministry","photo": "images/teams/MirandaChipandwe" },
    { "name": "Sister Petronella Mutale",   "role": "Women's Ministry",       "group": "Women's Ministry","photo": "images/teams/PetronellaMutale" },
    { "name": "Sister Rebecca Phiri",       "role": "Women's Ministry",       "group": "Women's Ministry","photo": "images/teams/RebeccaPhiri"     },
    { "name": "Sister Sandra Batala",       "role": "Youth Leader / Usher",   "group": "Youth",          "photo": "images/teams/SandraBatala"      },
    { "name": "Brother Abraham Mwape",      "role": "Usher / Intercessor",    "group": "Ushers",         "photo": "images/teams/AbramhamMwape"     },
    { "name": "Brother Gladson Sampa",      "role": "Media Team",             "group": "Media Team",     "photo": "images/teams/GladsonSampa"      },
    { "name": "Brother Daniel Gumbo",       "role": "Media Team",             "group": "Media Team",     "photo": "images/teams/DanielGumbo"       },
    { "name": "Brother James Mutale",       "role": "Media Team",             "group": "Media Team",     "photo": "images/teams/JamesMutale"       },
    { "name": "Sister Annet Chanda",        "role": "Media Team",             "group": "Media Team",     "photo": "images/teams/AnnetChanda"       },
    { "name": "Brother Emmanuel Ngo'nga",   "role": "Media Team",             "group": "Media Team",     "photo": "images/teams/EmmanuelNgonga"    },
    { "name": "Brother Gabriel Zepeda",     "role": "Media Team",             "group": "Media Team",     "photo": "images/teams/GabrielZepeda"     }
  ]

};