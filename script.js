const featuredProjects = [
  {
    title: "AI-бот бронирования",
    subtitle: "База отдыха, Выкса",
    status: "Работает у клиента",
    description:
      "Раньше весь путь гостя проходил через переписку с администратором: свободные даты, количество гостей, подбор варианта, оплата. Теперь гость пишет свободным текстом, а бот подбирает вариант, оформляет бронь и принимает оплату.",
    metrics: [
      { value: "200+", label: "оформленных броней" },
      { value: "300+", label: "пользователей" },
      { value: "30", label: "постоянных гостей" },
    ],
    points: [
      "AI-диалог вместо кнопочных сценариев",
      "Интеграция с YClients — актуальная доступность в реальном времени",
      "Приём оплаты через YooKassa",
      "База данных броней, изменение и отмена гостем",
      "Обработка дополнительных услуг",
    ],
    chat: {
      title: "Как проходит бронирование",
      note: "Реальный сценарий из работающего бота. Имя гостя и ссылка на оплату скрыты.",
      messages: [
        { from: "bot", text: "Здравствуйте! Я Любовь, администратор базы отдыха «Причал» на пляже Максима Горького. Какой объект вас интересует: беседка, баня или гостевой дом?" },
        { from: "user", text: "Баня с бассейном" },
        { from: "bot", text: "Баня с бассейном свободна на 4 сентября. На сколько часов хотите её забронировать?" },
        { from: "user", text: "На 6 часов, с 17:00" },
        { from: "bot", text: "Поняла, на 6 часов с 17:00. Это будет 15 900 ₽. Сколько гостей планируете?" },
        { from: "user", text: "13" },
        { from: "bot", text: "Заявка на баню с бассейном 4 сентября с 17:00 на 6 часов для 13 гостей готова. Стоимость 15 900 ₽, предоплата 50% — 7 950 ₽. Отправляю ссылку для оплаты. Возврат возможен при отмене за 7 дней до даты бронирования." },
      ],
    },
    tags: ["AI", "YClients", "YooKassa", "PostgreSQL"],
    url: "https://max.ru/id524706834883_bot",
    linkLabel: "Открыть бота",
    videoFile: "assets/video/booking-bot.mp4",
    videoUrl: "https://drive.google.com/file/d/11v9zoqVPU-Vchs89-pht0_gelKlmyLRT/view?usp=sharing",
    videoLabel: "Смотреть видео работы бота",
    image: "assets/booking-bot-prichal.jfif",
  },
  {
    title: "AI-бот-консультант",
    subtitle: "VR-арена «Другие миры», Серов",
    status: "Работает у клиента",
    description:
      "Посетители задавали в сообщениях одни и те же вопросы: какие есть форматы, что входит в пакеты, что подойдёт для компании из шести человек. Сотрудник тратил на это рабочее время, часть обращений терялась.",
    metrics: [
      { value: "100+", label: "обращений обработано" },
      { value: "20", label: "гостей вернулись повторно" },
      { value: "AmoCRM", label: "заявки сразу в воронке" },
    ],
    points: [
      "AI-консультация в свободном диалоге, а не по кнопкам",
      "Подбор формата под запрос гостя",
      "Сбор контактных данных",
      "Передача заявки в AmoCRM — сразу в воронку продаж",
      "После запуска клиент продолжил работать со мной над развитием бота",
    ],
    tags: ["VK Bot", "AI", "AmoCRM"],
    coverLabel: "AI-бот · Консультация · AmoCRM",
    url: "https://vk.ru/anotherworld.serov",
    linkLabel: "Открыть бота",
    chat: {
      title: "Как бот отвечает на вопрос о ценах",
      note: "Реальный диалог из работающего бота.",
      messages: [
        { from: "bot", text: "Здравствуйте! Я Анна, онлайн-менеджер VR-арены «Другие миры» в Серове. Расскажу об играх, ценах, пакетах для мероприятий или помогу подобрать формат посещения. Что вас интересует?" },
        { from: "user", text: "цены" },
        { from: "bot", text: "Часовой сеанс стоит 700 рублей с человека по будням и 900 рублей в выходные.<br /><br />Для мероприятий есть пакеты:<br />— Lite (2 часа, до 6 игроков): 7000 / 9000 рублей<br />— Lite+ (3 часа, до 6 игроков): 9000 / 12000 рублей<br />— Standart (2, 3 и 4 часа, до 12 игроков): от 11000 до 22000 рублей<br />— VIP (3 часа, до 12 игроков, до 24 посетителей): 15000 / 18000 рублей<br /><br />Цены пакетов указаны за будни / выходные. Дополнительные шлемы и отдельные услуги оплачиваются отдельно — уточню, если нужно." },
        { from: "user", text: "а если 4 человека" },
      ],
    },
  },
  {
    title: "FinSight",
    subtitle: "Собственное приложение в RuStore",
    status: "Опубликован в RuStore",
    description:
      "Приложение для управления личными финансами с AI-помощником. Траты записываются обычным текстом: «кофе 250 и магнит 870» — AI сам разносит суммы по категориям, обновляет остаток и предупреждает, если день выходит за лимит. Идея, проектирование, разработка, публикация и обновления — полностью моя работа.",
    metrics: [
      { value: "70", label: "активных пользователей" },
      { value: "RuStore", label: "прошло модерацию магазина" },
      { value: "AI-чат", label: "учёт расходов текстом" },
    ],
    points: [
      "Учёт расходов и доходов в свободной форме, без форм и выпадающих списков",
      "Дневной лимит: приложение считает, сколько можно тратить, чтобы суммы хватило до конца срока",
      "Главный экран: текущий остаток, траты за день и неделю, месячный бюджет",
      "Цели, планирование и история операций",
      "Публикация в магазине — это не только код: сборки, требования площадки, обновления. Ваше приложение пройдёт тот же путь",
    ],
    chat: {
      title: "Как записывается трата",
      note: "Реальный диалог с AI-помощником внутри приложения.",
      messages: [
        { from: "user", text: "На еду потратил 807р бургеры" },
        { from: "bot", text: "Записал расход 807 ₽ на бургеры.<br /><br />Добавлен расход: Бургеры · 807 ₽ · Кафе<br />Текущий остаток обновлён: 35 805 ₽.<br /><br />Осторожно: это выше безопасного дневного лимита 549 ₽. Сегодня лучше урезать необязательные траты." },
      ],
    },
    tags: ["React Native", "Expo", "AI", "RuStore"],
    url: "https://www.rustore.ru/catalog/app/com.finsight.mvp",
    linkLabel: "Открыть в RuStore",
    image: "assets/finsight-screenshot.webp",
  },
];

const secondaryProjects = [
  {
    title: "Бот продажи курсов",
    subtitle: "Оплата, доступ к материалам и админка",
    status: "Работает у клиента",
    description:
      "Клиент покупает курс прямо в боте и сразу получает доступ к материалам. Оплата через YooKassa, отдельная админка для управления курсами и доступами.",
    tags: ["MAX Bot", "YooKassa", "Админка", "Python"],
    coverLabel: "Продажа курсов · Оплата · Админка",
    url: "https://max.ru/id665903340026_bot",
    linkLabel: "Открыть бота",
  },
  {
    title: "Бот записи на курсы",
    subtitle: "Google Таблицы и AI-диалог",
    status: "Работает у клиента",
    description:
      "Бот записывает на курсы и отвечает на вопросы в свободной форме через OpenAI API. Заявки складываются в Google Таблицу, где клиент сам правит даты и добавляет новые потоки.",
    tags: ["VK Bot", "OpenAI API", "Google Sheets"],
    coverLabel: "Запись на курсы · Google Sheets · AI",
    image: "assets/kovina-avatar.jpg",
    imageMode: "contain",
    url: "https://vk.com/neiroseti_from_kovina",
    linkLabel: "Открыть бота",
  },
  {
    title: "VK-бот с Google-сервисами",
    subtitle: "Автоматизация записи и работы с данными",
    status: "Есть видео-демо",
    description:
      "Бот общается с клиентами и закрывает внутренние процессы: данные из диалога сразу уходят в сервисы Google и используются дальше — сотруднику не нужно ничего переносить руками.",
    tags: ["VK API", "Python", "Google API", "Automation"],
    coverLabel: "Автоматизация · Google API",
    url: "https://drive.google.com/file/d/14utzvQFZIFHL5KA6NyB1CMmDH0FzhRyw/view?usp=drive_web",
    linkLabel: "Смотреть видео-демо",
  },
  {
    title: "ScanFlow",
    subtitle: "Сканер QR-кодов для оплаты за границей",
    status: "Опубликован в RuStore",
    description:
      "Приложение для оплаты рублями в Таиланде и Индонезии: сканирование и загрузка QR-кодов, фильтр по городам, предупреждение, если код не тайский и не индонезийский. Опубликовано в RuStore под моим именем — прошло ручную проверку и антивирус магазина.",
    tags: ["Android", "Kotlin", "QR", "RuStore"],
    url: "https://www.rustore.ru/catalog/app/com.scanflow.mobile",
    linkLabel: "Открыть в RuStore",
    image: "assets/scanflow-logo.svg",
    imageMode: "contain",
  },
  {
    title: "AI-помощник аналитика",
    subtitle: "Командный проект, роль — руководитель",
    status: "Работа в команде",
    description:
      "Внутренний AI-инструмент для аналитических задач. Здесь я работал не один: вёл команду из пяти человек — разбивал задачу на части, распределял работу, сводил результат и отвечал за то, чтобы проект дошёл до рабочего состояния. Интерфейса у инструмента нет — это внутренний прототип, а не продукт для пользователей.",
    tags: ["AI", "Analytics", "Python", "Команда 5 человек"],
    url: "https://github.com/S0lerro/AI-Helper-analytics",
    linkLabel: "Открыть репозиторий",
    coverLabel: "Команда 5 человек · AI-инструмент",
  },
  {
    title: "AI-поиск научных цитат",
    subtitle: "Поиск по публикациям с обработкой через LLM",
    status: "Исследовательский проект",
    description:
      "Бот принимает запрос, ищет релевантные публикации на КиберЛенинке и обрабатывает найденное через LLM, чтобы вернуть подходящую цитату, а не список ссылок.",
    tags: ["Python", "VK API", "DeepSeek", "Parsing"],
    coverLabel: "Поиск по научным публикациям · LLM",
    image: "assets/quotes-bot-cover.png",
    imageMode: "contain",
  },
  {
    title: "Автоматизация откликов",
    subtitle: "Парсер заказов и генерация ответов через AI",
    status: "Personal / Automation",
    description:
      "Система отслеживает новые проекты на бирже, разбирает требования заказчика и формирует релевантный отклик через AI. Пример автоматизации рутинной коммуникации от начала до конца.",
    tags: ["Python", "Parsing", "AI", "Automation"],
    coverLabel: "Парсинг · AI-отклики",
  },
];

const reviews = [
  {
    name: "Кирилл",
    date: "13 дней назад",
    text: "Приятно было работать вместе, все сделал по факту за короткое время. В будущем буду обращаться",
    service: "Telegram-бот",
    signature: "Клиент / проект",
  },
  {
    name: "Евгения",
    date: "1 год назад",
    text:
      "Отлично выполнена работа, исполнитель проконсультировал по моим вопросам, сделал бота для записи на обучающий курс. Получаю данные клиентов в Гугл таблице. Там же могу править даты курса и добавлять новые. Очень удобно",
    service: "Бот записи на курс",
    signature: "Клиент / бот",
  },
  {
    name: "Александр",
    date: "Недавно",
    text:
      "Савелий сделал бота для обработки текста дипломов: можно быстро отправить фрагмент, получить переработанный вариант и не делать всё вручную. Получилось удобно и по делу.",
    service: "Бот для работы с текстом",
    signature: "Клиент / дипломный проект",
  },
];

const casesGrid = document.querySelector("#casesGrid");
const secondaryCasesGrid = document.querySelector("#secondaryCasesGrid");
const reviewsGrid = document.querySelector("#reviewsGrid");
const linkModal = document.querySelector("#linkModal");
const linkModalUrl = document.querySelector("#linkModalUrl");
const confirmProjectLink = document.querySelector("#confirmProjectLink");

let activeProjectUrl = "";

function getLinkAttributes(project) {
  if (!project.url) {
    return "";
  }

  return `role="button" tabindex="0" data-project-url="${project.url}" aria-label="Открыть проект ${project.title}"`;
}

function getMedia(project) {
  const label = `<span class="project-label">${project.coverLabel || project.subtitle}</span>`;

  if (!project.image) {
    return label;
  }

  const imageClass = project.imageMode === "contain" ? "is-contained" : "";

  // Изображение лежит поверх подписи: если файла нет, оно убирает себя и остаётся текст.
  return `${label}<img class="${imageClass}" src="${project.image}" alt="Проект ${project.title}" loading="lazy" onerror="this.remove()" />`;
}

function renderMetrics(project) {
  if (!project.metrics) {
    return "";
  }

  return `<div class="project-metrics">${project.metrics
    .map((metric) => `<div><strong>${metric.value}</strong><span>${metric.label}</span></div>`)
    .join("")}</div>`;
}

function renderChat(project) {
  if (!project.chat) {
    return "";
  }

  return `
        <div class="chat-demo">
          <p class="chat-title">${project.chat.title}</p>
          <div class="chat-thread">
            ${project.chat.messages
              .map((message) => `<p class="chat-bubble is-${message.from}">${message.text}</p>`)
              .join("")}
          </div>
          <p class="chat-note">${project.chat.note}</p>
        </div>
      `;
}

function renderVideo(project) {
  if (!project.videoFile) {
    return "";
  }

  return `
        <figure class="case-video">
          <video controls preload="metadata" playsinline>
            <source src="${project.videoFile}" type="video/mp4" />
          </video>
          <figcaption>${project.videoLabel}</figcaption>
        </figure>
      `;
}

function renderProject(project) {
  const points = project.points
    ? `<ul class="project-points">${project.points.map((point) => `<li>${point}</li>`).join("")}</ul>`
    : "";
  const buttons = [];

  if (project.videoUrl && !project.videoFile) {
    buttons.push(
      `<button class="button primary" type="button" data-project-url="${project.videoUrl}">${project.videoLabel}</button>`,
    );
  }

  if (project.url) {
    const style = project.videoUrl && !project.videoFile ? "ghost" : "primary";

    buttons.push(
      `<button class="button ${style}" type="button" data-project-url="${project.url}">${project.linkLabel || "Открыть проект"}</button>`,
    );
  }

  if (project.videoFile && project.videoUrl) {
    buttons.unshift(
      `<button class="button primary" type="button" hidden data-fallback-url data-project-url="${project.videoUrl}">${project.videoLabel}</button>`,
    );
  }

  const action = buttons.length ? `<div class="project-actions">${buttons.join("")}</div>` : "";

  return `
        <article class="project reveal">
          <div class="project-caption">
            <span class="project-status">${project.status}</span>
            <h3>${project.title}</h3>
            <span class="project-subtitle">${project.subtitle}</span>
            <p>${project.description}</p>
            ${renderMetrics(project)}
            ${points}
            ${renderChat(project)}
            ${renderVideo(project)}
            <div class="project-tags">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            ${action}
          </div>
        </article>
      `;
}

function renderMiniProject(project) {
  return `
        <article class="project-mini reveal ${project.url ? "is-clickable" : ""}" ${getLinkAttributes(project)}>
          <div class="project-mini__shot">${getMedia(project)}</div>
          <div>
            <span class="project-status">${project.status}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.url ? `<span class="project-link">${project.linkLabel || "Открыть проект"} →</span>` : ""}
          </div>
        </article>
      `;
}

const orderCard = `
        <a class="project-mini is-order reveal" href="#contacts">
          <div class="project-mini__shot"><span class="project-label">Ваш проект</span></div>
          <div>
            <span class="project-status">Свободен для новой задачи</span>
            <h3>Здесь может быть ваш заказ</h3>
            <p>Опишите задачу в двух предложениях — отвечу, что реально сделать в первой версии, сколько это займёт и сколько будет стоить.</p>
            <span class="project-link">Обсудить задачу →</span>
          </div>
        </a>
      `;

function initVideoFallback() {
  document.querySelectorAll(".case-video source").forEach((source) => {
    source.addEventListener("error", () => {
      const figure = source.closest(".case-video");
      const card = figure.closest(".project");
      const link = card.querySelector("[data-fallback-url]");

      figure.remove();

      if (link) {
        link.hidden = false;
      }
    });
  });
}

function renderProjects() {
  casesGrid.innerHTML = featuredProjects.map(renderProject).join("");
  secondaryCasesGrid.innerHTML = secondaryProjects.map(renderMiniProject).join("") + orderCard;
}

function openLinkModal(url) {
  activeProjectUrl = url;
  linkModalUrl.textContent = url;
  linkModal.classList.add("is-open");
  linkModal.setAttribute("aria-hidden", "false");
  confirmProjectLink.focus();
}

function closeLinkModal() {
  activeProjectUrl = "";
  linkModal.classList.remove("is-open");
  linkModal.setAttribute("aria-hidden", "true");
}

function initProjectLinks() {
  [casesGrid, secondaryCasesGrid].forEach((grid) => {
    grid.addEventListener("click", (event) => {
      const target = event.target.closest("[data-project-url]");

      if (target) {
        openLinkModal(target.dataset.projectUrl);
      }
    });

    grid.addEventListener("keydown", (event) => {
      const target = event.target.closest("[data-project-url]");

      if (!target || (event.key !== "Enter" && event.key !== " ")) {
        return;
      }

      event.preventDefault();
      openLinkModal(target.dataset.projectUrl);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeLinkModal);
  });

  confirmProjectLink.addEventListener("click", () => {
    if (activeProjectUrl) {
      const externalLink = document.createElement("a");

      externalLink.href = activeProjectUrl;
      externalLink.target = "_blank";
      externalLink.rel = "noopener noreferrer";
      document.body.append(externalLink);
      externalLink.click();
      externalLink.remove();
    }

    closeLinkModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && linkModal.classList.contains("is-open")) {
      closeLinkModal();
    }
  });
}

function renderReviews() {
  reviewsGrid.innerHTML = reviews
    .map(
      (review) => `
        <article class="review reveal">
          <p class="review-text">«${review.text}»</p>
          <span class="review-name">${review.name}</span>
          <span class="review-meta">${review.service || review.signature} · ${review.date}</span>
        </article>
      `,
    )
    .join("");
}

function initRevealAnimation() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  elements.forEach((element) => observer.observe(element));
}

renderProjects();
renderReviews();
initProjectLinks();
initVideoFallback();
initRevealAnimation();
