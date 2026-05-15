import mainPhoto from "./assets/images/IMG_2053.JPG";
import introVideo from "./assets/video/anna-intro.MP4";
import "./index.css";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="site-logo">
          <span className="logo-accent">Анна</span> Милованова
          <span className="logo-badge">психолог</span>
        </a>

        <nav className="site-nav">
          <button onClick={() => scrollToSection("about")} className="nav-link">
            О курсе
          </button>
          <button onClick={() => scrollToSection("reviews")} className="nav-link">
            Отзывы
          </button>
          <button onClick={() => scrollToSection("faq")} className="nav-link">
            FAQ
          </button>
          <button onClick={() => scrollToSection("cta")} className="header-button">
            Получить доступ
          </button>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-top">
          <p className="hero-label">Мини-курс</p>
          <h1>
            ПУЛЬТ ОТ
            <br />
            <span className="accent-text">ГИПЕРФОКУСА</span>
          </h1>
        </div>

        <div className="hero-bottom">
          <div className="hero-text-column">
            <p className="hero-subtitle">чит-код от прокрастинации</p>

            <div className="hero-full-text">
              <p>Ты можешь сделать за ночь то, что другие делают неделю</p>
              <p>
                но <strong>НЕ МОЖЕШЬ НАЧАТЬ</strong> простое
              </p>

              <p>
                Ты <strong>ЗНАЕШЬ, ЧТО</strong> делать
              </p>
              <p>
                но <strong>НЕ МОЖЕШЬ НАЧАТЬ</strong>
              </p>

              <p>
                У тебя есть <strong>ИДЕИ</strong>
              </p>
              <p>
                но они <strong>НЕ ДОХОДЯТ ДО КОНЦА</strong>
              </p>

              <p>
                Ты можешь быть <strong>ОЧЕНЬ ПРОДУКТИВНЫМ</strong>
              </p>
              <p>
                но <strong>НЕ МОЖЕШЬ ЭТИМ УПРАВЛЯТЬ</strong>
              </p>

              <p>
                Вчера ты <strong>МОГ</strong>
              </p>
              <p>
                сегодня как будто <strong>НЕТ</strong>
              </p>

              <p>
                Ты снова <strong>ОТКЛАДЫВАЕШЬ</strong>
              </p>
              <p>
                и <strong>ЗЛИШЬСЯ НА СЕБЯ</strong>
              </p>

              <p>
                Ты думал, что это <strong>ЛЕНЬ</strong>
              </p>
              <p>
                или <strong>СЛАБАЯ ВОЛЯ</strong>
              </p>

              <p>
                <strong>НО ЭТО ТО, КАК РАБОТАЕТ ТВОЯ НЕРВНАЯ СИСТЕМА</strong>
              </p>

              <p>Здесь не будет «просто начни»</p>
              <p>
                Здесь ты поймёшь <strong>ПОЧЕМУ</strong> это происходит
              </p>
              <p>
                и как <strong>ПЕРЕСТАТЬ ВОЕВАТЬ С СОБОЙ</strong>
              </p>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-image-wrap">
              <img
                src={mainPhoto}
                alt="Анна Милованова - кризисный психолог"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#cta" className="primary-button">
            Получить доступ
          </a>
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const currentVideo = videoRef.current;
    const currentContainer = containerRef.current;

    if (!currentVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && isPlaying) {
            currentVideo.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [isPlaying]);

  return (
    <section className="section video-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">Личное обращение</span>
          <h2>
            Меня зовут <span className="accent-text">Анна Милованова</span>
          </h2>
          <p className="video-subtitle">
            кризисный провокативный психолог, в профессии более 20 лет
          </p>
        </div>

        <div className="video-wrapper" ref={containerRef}>
          <div className="video-container">
            {!isPlaying && (
              <div className="video-overlay" onClick={handlePlayVideo}>
                <div className="play-button">
                  <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
                    <circle
                      cx="34"
                      cy="34"
                      r="32"
                      stroke="white"
                      strokeWidth="3"
                      fill="rgba(0,0,0,0.5)"
                    />
                    <polygon points="28,22 28,46 48,34" fill="white" />
                  </svg>
                </div>
                <p className="video-hint">Нажмите, чтобы посмотреть обращение</p>
              </div>
            )}

            <video
              ref={videoRef}
              className="video-player"
              controls={isPlaying}
              onEnded={() => setIsPlaying(false)}
              playsInline
            >
              <source src={introVideo} type="video/mp4" />
              Ваш браузер не поддерживает видео
            </video>
          </div>
        </div>

        <div className="video-stats">
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">лет в профессии</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">счастливых клиентов</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">часов терапии</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ForWhomSection = () => (
  <section className="section dark-soft-section">
    <div className="container">
      <div className="section-header center">
        <span className="section-label">Этот курс для вас, если</span>
        <h2>Узнаёте себя?</h2>
      </div>

      <div className="whom-grid">
        <div className="whom-card">
          <div className="whom-icon">😔</div>
          <p>Откладываете даже любимые дела</p>
        </div>

        <div className="whom-card">
          <div className="whom-icon">📊</div>
          <p>Начинали 100 проектов, а закончили 3</p>
        </div>

        <div className="whom-card">
          <div className="whom-icon">💔</div>
          <p>Чувствуете вину за пустые дни</p>
        </div>

        <div className="whom-card">
          <div className="whom-icon">😫</div>
          <p>Устали от самобичевания</p>
        </div>
      </div>
    </div>
  </section>
);

const InnerVoicesSection = () => (
  <section className="section light-section compact-section">
    <div className="container narrow compact-stack">
      <article className="compact-item">
        <span className="section-label">Иногда внутри звучит</span>
        <h2>«Я просто тупой?»</h2>
        <p className="section-text compact-text">
          Потому что ты многое понимаешь, быстро схватываешь, и при этом не
          можешь начать. Не доводишь до конца. И в какой-то момент становится
          страшно, что так будет всегда.
        </p>
      </article>

      <article className="compact-item">
        <span className="section-label">Иногда ты думаешь</span>
        <h2>«Я ленивая, безвольная ж.па?»</h2>
        <p className="section-text compact-text">
          Потому что иногда ты можешь многое, очень многое.
          А иногда ты знаешь, что делать, но не можешь взяться за задачу.
        </p>
      </article>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="section dark-section">
    <div className="container narrow">
      <div className="section-header">
        <span className="section-label">Почему это не работает</span>
        <h2>Дело не в силе воли</h2>
      </div>

      <p className="section-text">
        Кажется, что нужно просто заставить себя. Но это не работает, потому что
        мозг не включается на «надо». Ему нужен другой способ запуска. Пока его
        нет, ты либо не начинаешь, либо делаешь через перегруз, а потом
        откатываешься.
      </p>
    </div>
  </section>
);

const CourseContent = () => {
  const contentItems = [
    {
      number: "01",
      title: "Как начать задачу",
      description:
        "Когда не включаешься и не можешь подойти даже к самому простому.",
    },
    {
      number: "02",
      title: "Что делать с гиперфокусом",
      description:
        "Чтобы он не съедал тебя полностью и не выбивал из жизни.",
    },
    {
      number: "03",
      title: "Как не проваливаться в откат",
      description:
        "После рывка, перегруза и попытки снова жить на износе.",
    },
    {
      number: "04",
      title: "Как выстроить свою систему",
      description:
        "Не по чужим правилам, а под свою реальную нервную систему.",
    },
  ];

  const scrollToCta = () => {
    const element = document.getElementById("cta");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section light-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">На курсе ты разберёшься</span>
          <h2>С чем именно работать</h2>
        </div>

        <div className="cards-grid">
          {contentItems.map((item) => (
            <article className="info-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="section-action center-action">
          <button onClick={scrollToCta} className="primary-button">
            Получить доступ
          </button>
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => (
  <section className="section beige-section">
    <div className="container">
      <div className="section-header center">
        <span className="section-label">Что меняется</span>
        <h2>После курса становится легче</h2>
      </div>

      <div className="results-grid">
        <div className="result-card">
          <div className="result-icon">✓</div>
          <p>Ты начинаешь видеть момент, где раньше срывался.</p>
        </div>

        <div className="result-card">
          <div className="result-icon">✓</div>
          <p>Появляется реальный способ входить в задачи.</p>
        </div>

        <div className="result-card">
          <div className="result-icon">✓</div>
          <p>Ты меньше проваливаешься в откаты после перегруза.</p>
        </div>

        <div className="result-card">
          <div className="result-icon">✓</div>
          <p>Планирование становится рабочим и выдерживает реальную жизнь.</p>
        </div>
      </div>
    </div>
  </section>
);

const QuoteSection = () => (
  <section className="section quote-section">
    <div className="container narrow">
      <div className="section-header center">
        <span className="section-label">Главная мысль</span>
      </div>

      <blockquote className="main-quote">
        «Это не лень. И не слабая воля.
        <br />
        Это система, которую можно понять и перестроить.»
      </blockquote>
    </div>
  </section>
);

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Иван, 34",
      text: "Я впервые понял, что со мной происходит. Раньше думал, что просто ленивый. После курса стало понятно, почему я откладываю даже простые вещи и что с этим делать.",
    },
    {
      id: 2,
      name: "Александр, 29",
      text: "Я не стал идеальной версией себя, но хотя бы начал делать. Без насилия над собой. Для меня это вообще новый опыт.",
    },
    {
      id: 3,
      name: "Светлана, 37",
      text: "Я перестала себя съедать за это. Когда пришло понимание, что дело не в дефектности, а в особенностях нервной системы, стало намного легче.",
    },
  ];

  return (
    <section className="section dark-section" id="reviews">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">Отзывы</span>
          <h2>Что говорят после курса</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-quote">"</div>
              <p className="review-text">{review.text}</p>
              <p className="review-name">{review.name}</p>
              <div className="review-stars">★★★★★</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqItems = [
    {
      id: 1,
      question: "Нужен ли официальный диагноз СДВГ?",
      answer:
        "Нет. Этот курс не про диагноз, а про механизмы. Если вы узнаёте себя в описании, этого достаточно.",
    },
    {
      id: 2,
      question: "Это заменит терапию?",
      answer:
        "Нет. Это образовательный курс. Но он даёт понимание, которое часто становится первой опорой.",
    },
    {
      id: 3,
      question: "Подойдёт ли, если у меня нет СДВГ?",
      answer:
        "Да. Если у вас есть прокрастинация, потеря фокуса и откаты после перегрузки, курс будет понятен и применим.",
    },
    {
      id: 4,
      question: "Сколько длится доступ?",
      answer:
        "Доступ бессрочный. Вы можете возвращаться к материалам в своём темпе.",
    },
    {
      id: 5,
      question: "В каком формате проходит курс?",
      answer:
        "Короткие видеоуроки без перегруза и лишней теории, с возможностью сразу применять в жизни.",
    },
  ];

  return (
    <section className="section dark-soft-section" id="faq">
      <div className="container narrow">
        <div className="section-header center">
          <span className="section-label">FAQ</span>
          <h2>Вопросы, которые обычно возникают</h2>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.id}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};


const ExpertsSection = () => {
  return (
    <section className="section experts-section" id="experts">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">Кто ведёт</span>
          <h2>Ваш эксперт</h2>
        </div>

        <div className="experts-grid" style={{ gridTemplateColumns: 'minmax(380px, 500px)', justifyContent: 'center' }}>
          {/* Анна Милованова */}
          <div className="expert-card">
            <div className="expert-photo">
              <img src={mainPhoto} alt="Анна Милованова" />
            </div>
            <h3>Анна Милованова</h3>
            <p className="expert-title">Кризисный психолог, EMDR-терапевт</p>
            <p className="expert-experience">20+ лет частной практики</p>
            
            <div className="expert-divider"></div>
            
            <div className="expert-approach">
              <p><strong>Работаю в подходе ДПДГ (EMDR)</strong> — современном методе психотерапии для работы с травматическим опытом, тревогой, последствиями стресса и эмоциональными перегрузками.</p>
              <p>Учитываю особенности <strong>СДВГ у взрослых</strong>, влияние нейроотличий на самооценку, отношения, мотивацию и повседневную жизнь.</p>
            </div>

            <div className="expert-requests">
              <p className="requests-title">Частые запросы:</p>
              <ul>
                <li>тревога, панические атаки, эмоциональные перегрузки</li>
                <li>последствия критики, стыда, хронического самообвинения</li>
                <li>прокрастинация, выгорание, ощущение «не справляюсь»</li>
                <li>жизненные кризисы, потери, резкие перемены</li>
                <li>особенности жизни с СДВГ: хаос, откладывание, истощение</li>
                <li>сложности в отношениях, когда тяжело понять себя и другого</li>
              </ul>
            </div>

            <div className="expert-contacts">
              <a href="https://forms.gle/SArV4HVsGhmTFc4S7" className="expert-button" target="_blank" rel="noopener noreferrer">
                📝 Записаться на диагностику
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="section final-section" id="cta">
      <div className="container narrow final-block">
        <div className="section-header center">
          <span className="section-label">Финальный шаг</span>
          <h2>
            Начни с мини-курса{" "}
            <span className="accent-text">«Пульт от гиперфокуса»</span>
          </h2>
        </div>

        <p className="section-text">
          Чтобы перестать жить от рывка к откату и начать этим управлять.
          Выстроить систему, в которой ты не теряешь себя.
        </p>

        <div className="cta-price">
          <span className="price-old">€29</span>
          <span className="price-current">€9</span>
        </div>

        <div className="cta-buttons">
         <a href="https://buy.stripe.com/8x2eVddligYA4Gi8tEfUQ00"
         className="primary-button"
         target="_blank"
         rel="noopener noreferrer">
  💳 Оплатить картой
</a>
       <a href="ANNA_PERSONAL_TELEGRAM_HERE"
          className="secondary-button"
          target="_blank"
          rel="noopener noreferrer">
  🇷🇺 Оплата из РФ 
</a>
     </div>

        <p className="cta-note">Доступ открывается сразу после оплаты</p>
      </div>
    </section>
  );
};

const ThankYouPage = () => {
  return (
    <main className="thank-you-page">
      <section className="section final-section">
        <div className="container narrow final-block">
          <h1>Спасибо за покупку!</h1>

          <p className="section-text">
           Оплата прошла успешно.
          </p>

          <p className="section-text">
            Нажмите на кнопку ниже, чтобы перейти в Telegram-канал.
          </p>

          <a
  href="https://t.me/+_4bLkT4QcXkwMTYy"
  className="telegram-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Перейти в Telegram
</a>
        </div>
      </section>
    </main>
  );
};

function App() {
  const isThankYouPage = window.location.pathname === "/thank-you";

  if (isThankYouPage) {
    return <ThankYouPage />;
  }

  return (
    <main>
      <Header />
      <Hero />
      <VideoSection />
      <ForWhomSection />
      <InnerVoicesSection />
      <AboutSection />
      <CourseContent />
      <ResultsSection />
      <QuoteSection />
      <ReviewsSection />
      <FAQSection />
      <ExpertsSection />
      <CtaSection />
    </main>
  );
}

export default App;