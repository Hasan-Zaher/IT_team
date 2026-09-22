import React, { useState, useEffect, useRef } from 'react';

/* ===================== البيانات المنظمة حسب الأدوار ===================== */

const dean = [
  {
    id: 0,
    name: "  أ.د  مثنى القبيلي",
    role: "عميد كلية الهندسة المعلوماتية",
    image: "/images/dr-mothanna-alkubeily.jpg",  
    bio:  " ​عميد كلية الهندسة المعلوماتية في جامعة اللاذقية، وأستاذ وخبير متخصص في الأمن السيبراني وبروتوكولات الشبكات. حاصل على درجة الدكتوراه من جامعة كومبيين للتكنولوجيا (UTC) في فرنسا.  ​يمتلك رصيداً يتجاوز 40 بحثاً علمياً منشوراً، وتتركز اهتماماته في شبكات المركبات (VANETs)، وشبكات الحساسات اللاسلكية (WSNs)، والشبكات المعرفة بالبرمجيات (SDN). يتميز بقربه من طلابه كأب موجه، وسعيه المستمر للارتقاء بالكلية على الصعيدين العملي والنظري.",
      socials: {},
  },
];

const leaders = [
  {
    id: 1,
    name: "همام سروجي",
    role: "رئيس ركن المعلوماتية",
    image: "/images/homam-srouji.jpg",
    bio: "رئيس ركن المعلوماتية، خبرة سنتين بالأعمال التطوعية وتنظيم الفعاليات (إدارة، تخطيط، إشراف، تنسيق، توجيه).",
    socials: {
      linkedin: "https://www.linkedin.com/in/homamsrouji",
      facebook: "https://www.facebook.com/homam.sroji/",
      instagram: "https://www.instagram.com/homam1546/",
    },
  },
  {
    id: 2,
    name: "آلاء دركوشي",
    role: "رئيسة الهيئة لكلية الهندسة المعلوماتية",
    image: "/images/alaa-darkoushi.png",
    bio: "خريجة ذكاء اصطناعي - مشاركة في جميع الأنشطة التطوعية في كلية الهندسة المعلوماتية.",
    socials: {
      linkedin: "https://www.linkedin.com/in/alaa111darkoushi",
      facebook: "https://www.facebook.com/yonan.darko",
    },
  },
];

const managers = [
  {
    id: 3,
    name: "جون رامي عبيد",
    role: "مسؤول الميديا",
        image: "/images/john.JPG",
    bio: "عضو في فريق القيادة والمسؤولين عن الوجهة الأكاديمية, سنة ثالثة",
  socials: {
      instagram: "https://www.instagram.com/katulyx"
    },
  },
  {
    id: 4,
    name: "هبة الله سوخطة",
    role: "مسؤولة العروض بالوجهة",
    image: "/images/hiba-sokhta.jpg",
    bio: "خلال السنة الأخيرة اشتغلت كتير أعمال تطوعية سواء بكلية الهندسة المعلوماتية أو بجمعيات وحضرت عدة تدريبات، مهتمة بمجال العمل التطوعي والتكنولوجيا.",
    socials: {
      instagram: "https://www.instagram.com/hiba_sokhta",
      facebook: "https://www.facebook.com/share/1KgJj8vZaD/",
      linkedin: "https://www.linkedin.com/in/hibatullah-sokhta-24b52a40a",
    },
  },
  {
    id: 5,
    name: "زينا كراوي",
    role: "مسؤولة الفعاليات والديكور",
    image: "/images/zeina-karawe.jpg",
    bio: "مسؤولة الفعاليات والديكور، صانعة محتوى ومشاركة دائمية في تنظيم أهم الفعاليات بالمنطقة.",
    socials: {
      instagram: "https://www.instagram.com/zeina_karawe",
      linkedin: "https://www.linkedin.com/in/zeina-karawe-49a4b1368",
    },
  },
];

const mainPresenter = [
  {
    id: 6,
    name: "زيد جندي",
    role: "مقدم رئيسي",
    image: "/images/zaid-jundi.jpg",
    bio: "سنة ثانية - تنظيم، مقدم في وجهتك الأكاديمية.",
    socials: {
      instagram: "https://www.instagram.com/zedjundi",
      facebook: "https://www.facebook.com/share/1CX11rErCh/",
    },
  },
];

const softwarePresenters = [
  {
    id: 7,
    name: "زينب جندي",
    role: "مقدمة في عرض البرمجيات",
    image: "/images/zainab-jundi.jpg",
    bio: "سنة تالتة، مشاركة في عملين تطوعيين، أحب التعلم الذاتي وأدرس Front End.",
    socials: {
      instagram: "https://www.instagram.com/zi_kook_97?stkn=Z21ibmpxbjZuZzV1",
      facebook: "https://www.facebook.com/zainab.jundi/",
      linkedin: "https://www.linkedin.com/in/zainab-jundi-994606380",
    },
  },
  {
    id: 8,
    name: "عمر طه",
    role: "    مهندس برمجيات  ",
    image: "/images/omar-taha.jpg",
    bio: "خريج كلية الهندسة المعلوماتية تخصص هندسة البرمجيات. مختص بتطوير تطبيقات الموبايل باستخدام Flutter وبناء الحلول الرقمية.",
    socials: {
      linkedin: "https://www.linkedin.com/in/omar-taha-427163230",
      facebook: "https://www.facebook.com/omar.taha.367247",
      instagram: "https://www.instagram.com/omar_z_taha",
    },
  },
  {
    id: 9,
    name: "حسن زاهر",
    role: "مهندس برميجات",
    image: "/images/hasan-zaher.jpg",
    bio: "   خريج كلية الهندسة المعلوماتية تخصص هندسة البرمجيات. مبرمج Full Stack ",
    socials: {
      instagram: "https://www.instagram.com/hasan.zaher.6",
      facebook: "https://www.facebook.com/share/1CKbkVx5bJ/",
      linkedin: "https://www.linkedin.com/in/hasan-zaher-705773212",
    },
  },
];

const competitiveProgramming = [
  {
    id: 10,
    name: "مهند أوس",
    role: "عضو مقدم في قسم البرمجة التنافسية",
    image: "/images/muhanad-aos.png",
    bio: "سنة تانية - مشارك في جميع الأنشطة التطوعية في كلية الهندسة المعلوماتية.",
    socials: {
      instagram: "https://www.instagram.com/muhanadbaos/?hl=ar",
      facebook: "https://www.facebook.com/share/1Ez5Ygp3o1/",
      linkedin: "http://www.linkedin.com/in/muhannad-aos-7914bb3b8",
    },
  },
  {
    id: 11,
    name: "يامن حاجي محمود",
    role: "عضو مقدم في قسم البرمجة التنافسية",
    image: "/images/yamen-haji.jpg",
    bio: "سنة تانية منظم في وجهتك الأكاديمية، خبرة في البرمجة التنافسية.",
    socials: {
      facebook: "https://www.facebook.com/share/1HN7wtNpmg/",
    },
  },
  {
    id: 12,
    name: "وافي بديوي",
    role: "عضو مقدم في قسم البرمجة التنافسية",
    image: "/images/oafi-badawi.png",
    bio: "طالب سنة ثانية تقني وكاتب المحتوى للمسابقة البرمجية Jr Penetration Tester / Red Teaming",
    socials: {
      linkedin: "https://www.linkedin.com/in/wafy-anas-bdiwy?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
];

const networks = [
  {
    id: 12,
    name: "أسعد عيدو",
    role: "عضو يقدم عرض في قسم الشبكات",
    image: "/images/asaad-eido.jpg",
    bio: "مختص في الأمن السيبراني - يعمل لدى شركة.",
    socials: {
      linkedin: "https://www.linkedin.com/in/asaad-eido-515b20273",
    },
  },
  {
    id: 13,
    name: "جودي عزيز",
    role: "مهندس شبكات ونظم تشغيل",
    image: "/images/judy-aziz.jpg",
    bio: "مهندس شبكات ونظم تشغيل خريج جامعة اللاذقية، متخصص في تصميم الشبكات وإدارة الأنظمة وتطوير المواقع والحلول المبتكرة.",
    socials: {
      instagram: "https://www.instagram.com/judy.aziz.1",
      facebook: "https://www.facebook.com/share/1AvmmiEQve/",
      linkedin: "https://www.linkedin.com/in/judy-aziz-eng",
    },
  },
];

const ai = [
  {
    id: 21,
    name: "سام شادي صقر",
    role: "عضو يقدم عرض في قسم الذكاء الصنعي",
    image: "/images/sam.jpg",
    bio: "مختص ب الAI & Data سنة تالتة بجامعة اللاذقية هندسة معلوماتية و سنة تانية ب جامعة الشعب الأميركية ",
    socials: {
      linkedin: "https://www.linkedin.com/in/sam-saker-ss",
      facebook:"https://www.linkedin.com/in/sam-saker-ss"
    },
  }
  
];

const organizers = [
  {
    id: 14,
    name: "محمد سينو",
    role: "منظم في الوجهة الأكاديمية",
    image: "/images/mohammad-sino.jpg",
    bio: "عضو تنظيمي في وجهتك الأكاديمية لهذا العام، عضو في فريق الهيئة الطلابية، سنة خبرة في الأعمال التطوعية التنظيمية والإعلامية.",
    socials: {
      instagram: "https://www.instagram.com/m.sino22",
      facebook: "https://www.facebook.com/share/1GehkntPmW/",
    },
  },
  {
    id: 15,
    name: "آلاء طبشو",
    role: "عضو تنظيم",
    image: "/images/alaa-tabsho.jpg",
    bio: "سنة رابعة - متطوعة في وجهتك الأكاديمية وفي المسابقة السورية للبرمجة التنافسية.",
    socials: {
      instagram: "https://www.instagram.com/alaa._.tabsho",
    },
  },
  {
    id: 16,
    name: "علي قاهر",
    role: "  مسؤول الصوتيات  ",
    image: "/images/ali-qaher.jpg",
    bio: "متطوع في الوجهة سنة تانية.",
    socials: {
      instagram: "https://www.instagram.com/ali.kaher.5",
    },
  },
  {
    id: 17,
    name: "محمد رجب مريم",
    role: "منظم في الوجهة الأكاديمية",
    image: "/images/mohammad-rajab.jpg",
    bio: "سنة تانية منظم ومتطوع في الفعاليات التي حدثت في كلية الهندسة المعلوماتية.",
    socials: {
      facebook: "https://www.facebook.com/share/19KsTbYgZy/",
      instagram: "https://www.instagram.com/alrajab.10",
    },
  },
  {
    id: 18,
    name: "بلال طه",
    role: "منظم في الوجهة الأكاديمية",
    image: "/images/bilal-taha.jpg",
    bio: "سنة تانية - منظم في فعاليات اتحاد الطلبة.",
    socials: {
      facebook: "https://www.facebook.com/profile.php?id=100064880589092",
      instagram: "https://www.instagram.com/bl_az77",
    },
  },
  {
    id: 19,
    name: "سلمى قيج",
    role: "عضو بالفريق التنظيمي",
    image: "/images/salma-qij.jpg",
    bio: "سنة تانية - عندي شغف كبير بكلشي بخص الفن وبحب أدمج هاد الشغف مع شغلي بالتنظيم بالكلية وعندي حساب عام بشارك فيه رسمي.",
    socials: {
      instagram: "https://www.instagram.com/sl_sna2",
    },
  },
  {
    id: 20,
    name: "سلمى شريتح",
    role: "عضو بالفريق التنظيمي",
    image: "",
    bio: "سنة تانية - عضوة في وجهتك الأكاديمية، وتشارك في تنسيق الأنشطة الطلابية.",
    socials: {
      instagram: "https://www.instagram.com/sos.o1034",
    },
  },
];

const advices = [
  {
    id: 1,
    text: "الهندسة والذكاء الاصطناعي مو بس دراسة وكودات صعبة، هي مساحة حلوة لنكتشف كيف فينا نترك بصمة ونبتكر أفكار جديدة. عادي جدًا تحسوا بالضياع أو الخوف بالبداية، كلنا مرينا بهاد الشعور! أهم شي تضلكوا شغوفين، تجربوا بدون خوف، وتثقوا بإنو كل خطوة صغيرة عم تعملوها عم تبني مستقبلكن\nموفقين بكل خطوة ❤️",
    author: "فاطمة حموي",
    role: "هندسة معلوماتية اختصاص AI",
  },
  {
    id: 2,
    text: 'النجاح لا يرتبط بالعمر، بل بوضوح الرؤية والالتزام. ورغم أنني طالما سمعت نصيحة "انتظر الوقت المناسب"، أدركت أن الوقت المناسب تحدده نقطة الالتقاء بين هدف واضح، وخطة استراتيجية، وعزيمة صلبة للوصول إلى النهاية.',
    author: "ملهم فتنة",
    role: "هندسة ميكاترونيكس وباحث في علوم البيانات",
  },
  {
    id: 3,
    text: "الى اخوتي الصغار ✨️\nاذا دخلت الفرع عن رغبة فبقلك مبارك\nواذا بس لانه طلعلك ف بقلك كمان مبارك ... مقعدك بهي الكلية حلم كتير عالم ورب العالمين حطك هون لانو هاد مكانك المناسب الي رح تنطلق منه وتوصل رسالتك للناس\nاي نعم الامر مو مجرد اتخرج واشتغل وطلع مصاري\nهي رسالة للعالم اجمع حتى لو اشتغلت جوا بلدك بشركة ماحدا سامع باسمها\nماحدا بيقدر يصنع مجدك غير انت انت وبس\nلاتخلي حدا يحبطك .. لاتخلي حدا يستقل بأحلامك\nودور على الناس المبدعة و الطموحة\nولاتستنى ظروفك تتحسن لحتى تبدأ بلّش هلق هلق\nورافق الناس الطموحة الي بطور من حالها ومابترضى تبقى مكانها لانو لو ماكنت منهم انت رح تصير منهم اذا بقيت قريب منهم\nكل التوفيق والمحبة",
    author: "ديمة ديب",
    role: "طالبة سنة ثالثة",
  },
  {
    id: 4,
    text: "ابدؤوا من الأساسيات وابنوا عليها خطوة خطوة لا تحاولوا تتعلموا كل شيء دفعة وحدة والأهم لا تخافوا من الغلط لأنه جزء أساسي من التعلّم",
    author: "عليا عصفور",
    role: "طالبة هندسة برمجيات سنة خامسة",
  },
  {
    id: 5,
    text: "رسالتي لصناع المستقبل 💕\nالتقنية هيي لغة هاد العصر و المستقبل فإذا كنت شغوف لتكون جزءاً من هاد التغيير و العالم الرقمي فلا تتردد استخر الله وثق بقدراتك واجعل من الهندسة المعلوماتية بوابتك لترك بصمة حقيقية في العالم 🫶🏻🩷",
    author: "المهندسة فهده",
    role: "طالبة",
  },
];

/* ===================== مكوّن البطاقة ===================== */

function TeamCard({ member, isActive, onToggle }) {
  const hasSocials =
    member.socials &&
    Object.values(member.socials).some((link) => link && link !== "#");

  return (
    <div
      className={`team-card ${isActive ? "active" : ""}`}
      onClick={onToggle}
    >
      {member.image ? (
        <img src={member.image} alt={member.name} />
      ) : (
        <div className="avatar-placeholder">
          <i className="fas fa-user"></i>
        </div>
      )}

      <div className="basic-info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>

      <div className="details-overlay">
        <p className="description">{member.bio}</p>
        {hasSocials && (
          <div
            className="social-links"
            onClick={(e) => e.stopPropagation()}
          >
            {member.socials.instagram && (
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {member.socials.facebook && (
              <a
                href={member.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ===================== مكوّن شبكة البطاقات ===================== */

function TeamGrid({ members, activeId, setActiveId }) {
  return (
    <div className="team-grid animate-fade-up">
      {members.map((m) => (
        <TeamCard
          key={m.id}
          member={m}
          isActive={activeId === m.id}
          onToggle={() =>
            setActiveId((prev) => (prev === m.id ? null : m.id))
          }
        />
      ))}
    </div>
  );
}

/* ===================== التطبيق الرئيسي ===================== */

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef(null);

  // أنيميشن الظهور عند التمرير + زر العودة للأعلى
  useEffect(() => {
    const els = document.querySelectorAll(".animate-fade-up");
    els.forEach((el) => {
      el.style.animationPlayState = "paused";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
          }
        });
      },
      { threshold: 0.08 }
    );

    els.forEach((el) => observer.observe(el));

    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="team-container" ref={containerRef}>
      {/* شكر وتقدير */}
      <div className="thank-you-section animate-fade-up">
        <div className="thank-you-content">
          <i className="fas fa-award thank-you-icon"></i>
          <h1 className="thank-you-title">شكراً لصنّاع النجاح</h1>
          <p className="thank-you-text">
            خلف كل إنجاز عظيم فريق استثنائي يعمل بشغف وتفانٍ. نتقدم بخالص
            الشكر والتقدير لكل فرد من القائمين على الأعمال، المنظمين،
            والمسؤولين الذين سهروا وبذلوا جهوداً مضاعفة لتخرج هذه الفعالية
            بأبهى صورة. أنتم القلب النابض لهذا النجاح!
          </p>
        </div>
      </div>

      {/* 0. العميد */}
      <h2 className="section-title animate-fade-up">
        عميد الكلية
      </h2>
      <TeamGrid
        members={dean}
        activeId={activeId}
        setActiveId={setActiveId}
      />

      {/* 1. فريق القيادة */}
      <h2 className="section-title animate-fade-up">
        فريق القيادة (الرؤساء)
      </h2>
      <TeamGrid
        members={leaders}
        activeId={activeId}
        setActiveId={setActiveId}
      />

      {/* 2. المسؤولون */}
      <h2 className="section-title animate-fade-up">المسؤولون</h2>
      <TeamGrid
        members={managers}
        activeId={activeId}
        setActiveId={setActiveId}
      />

      {/* 3. المقدمون والعارضون */}
      <h2 className="section-title animate-fade-up">المقدمون والعارضون</h2>

      <h3 className="subsection-title animate-fade-up">المقدم الرئيسي</h3>
      <TeamGrid
        members={mainPresenter}
        activeId={activeId}
        setActiveId={setActiveId}
      />

      <h3 className="subsection-title animate-fade-up">عرض البرمجيات</h3>
      <TeamGrid
        members={softwarePresenters}
        activeId={activeId}
        setActiveId={setActiveId}
      />

      <h3 className="subsection-title animate-fade-up">
        البرمجة التنافسية
      </h3>
      <TeamGrid
        members={competitiveProgramming}
        activeId={activeId}
        setActiveId={setActiveId}
      />

      <h3 className="subsection-title animate-fade-up">
        الشبكات والأمن السيبراني
      </h3>
      <TeamGrid
        members={networks}
        activeId={activeId}
        setActiveId={setActiveId}
      />

      <h3 className="subsection-title animate-fade-up">
        الذكاء الصنعي
      </h3>
      <TeamGrid
        members={ai}
        activeId={activeId}
        setActiveId={setActiveId}
      />

      {/* 4. فريق التنظيم */}
      <h2 className="section-title animate-fade-up">فريق التنظيم</h2>
      <TeamGrid
        members={organizers}
        activeId={activeId}
        setActiveId={setActiveId}
      />

      {/* نصائح */}
      <div className="advice-section">
        <h2 className="section-title animate-fade-up">
          رسائل ونصائح للطلاب الجدد
        </h2>
        <p
          className="animate-fade-up"
          style={{
            color: "#64748b",
            maxWidth: 600,
            margin: "0 auto 1.5rem",
            fontSize: "1rem",
          }}
        >
          كلمات صادقة من طلاب وخريجين مرّوا بنفس الطريق، ليساعدوكم تبدأوا
          بثقة وطموح أكبر.
        </p>

        <div className="advice-grid animate-fade-up">
          {advices.map((a) => (
            <div className="advice-card" key={a.id}>
              <div className="quote-icon">
                <i className="fas fa-quote-right"></i>
              </div>
              <p className="advice-text">{a.text}</p>
              <div className="advice-author">
                <div className="advice-avatar">{a.author.charAt(0)}</div>
                <div>
                  <strong>{a.author}</strong>
                  <span>{a.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="site-footer">
        الوجهة الأكاديمية • كلية الهندسة المعلوماتية
      </p>

      <button
        type="button"
        className={`scroll-top ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="العودة للأعلى"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
