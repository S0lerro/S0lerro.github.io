const featuredProjects = [
  {
    title: "AI-бот бронирования",
    subtitle: "База отдыха, Выкса",
    status: "Работает у клиента",
    description:
      "Раньше весь путь гостя проходил через переписку с администратором: свободные даты, количество гостей, подбор варианта, оплата. Теперь гость пишет свободным текстом, а бот подбирает вариант, оформляет бронь и принимает оплату.",
    points: [
      "AI-диалог вместо кнопочных сценариев",
      "Интеграция с YClients — актуальная доступность в реальном времени",
      "Приём оплаты через YooKassa",
      "База данных броней, изменение и отмена гостем",
      "Обработка дополнительных услуг",
    ],
    tags: ["AI", "YClients", "YooKassa", "PostgreSQL"],
    url: "https://max.ru/id524706834883_bot",
    linkLabel: "Открыть бота",
    image: "assets/booking-bot-prichal.jfif",
  },
  {
    title: "AI-бот-консультант",
    subtitle: "VR-арена «Другие миры», Серов",
    status: "Работает у клиента",
    description:
      "Посетители задавали в сообщениях одни и те же вопросы: какие есть форматы, что входит в пакеты, что подойдёт для компании из шести человек. Сотрудник тратил на это рабочее время, часть обращений терялась.",
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
  },
  {
    title: "FinSight",
    subtitle: "Собственное приложение в RuStore",
    status: "Опубликован в RuStore",
    description:
      "Приложение для управления личными финансами с AI-помощником: учёт доходов и расходов, история операций, цели и планирование. Идея, проектирование, разработка, публикация и обновления — полностью моя работа.",
    points: [
      "Прошло модерацию магазина и вышло к пользователям",
      "AI-разбор трат и запросов пользователя",
      "Публикация в магазине — это не только код: сборки, требования площадки, обновления. Ваше приложение пройдёт тот же путь",
    ],
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
    title: "Recado",
    subtitle: "Мессенджер для международного проекта",
    status: "Публиковался в App Store",
    description: "Мобильный мессенджер на базе Matrix/Element. Участвовал в разработке мобильного продукта.",
    tags: ["iOS", "Matrix", "App Store"],
    url: "https://apps.apple.com/app/recado/id6759389840",
    linkLabel: "Открыть в App Store",
    image: "assets/recado-icon.webp",
    imageMode: "contain",
  },
  {
    title: "ScanFlow",
    subtitle: "Платёжное Android-приложение",
    status: "Опубликован в RuStore",
    description:
      "Приложение для оплаты рублями в Таиланде и Индонезии. Участвовал в технической реализации мобильного продукта.",
    tags: ["Android", "Kotlin", "REST API"],
    url: "https://www.rustore.ru/catalog/app/com.scanflow.mobile",
    linkLabel: "Открыть в RuStore",
    image: "assets/scanflow-logo.svg",
    imageMode: "contain",
  },
  {
    title: "AI-помощник аналитика",
    subtitle: "Внутренний AI-инструмент",
    status: "AI / Automation",
    description:
      "AI-инструмент для аналитических задач. Показывает, что AI применим не только в клиентских чат-ботах, но и во внутренних рабочих процессах компании.",
    tags: ["AI", "Analytics", "Automation"],
    url: "https://github.com/S0lerro/AI-Helper-analytics",
    linkLabel: "Открыть репозиторий",
    coverLabel: "AI во внутренних процессах",
  },
  {
    title: "One",
    subtitle: "Мессенджер для внутренней коммуникации сообщества",
    status: "Mobile / Product",
    description: "Участвовал в разработке мобильного мессенджера.",
    tags: ["Messaging", "Mobile", "Product"],
    url: "http://web.onemessage.ru/",
    linkLabel: "Открыть проект",
    image: "assets/one-icon.jfif",
    imageMode: "contain",
  },
  {
    title: "AI-поиск научных цитат",
    subtitle: "Поиск по публикациям с обработкой через LLM",
    status: "Исследовательский проект",
    description:
      "Бот принимает запрос, ищет релевантные публикации на КиберЛенинке и обрабатывает найденное через LLM, чтобы вернуть подходящую цитату, а не список ссылок.",
    tags: ["Python", "VK API", "DeepSeek", "Parsing"],
    coverLabel: "Поиск по научным публикациям · LLM",
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

function getMedia(project, containerClass) {
  if (!project.image) {
    return `<span class="project-label">${project.coverLabel || project.subtitle}</span>`;
  }

  const imageClass = project.imageMode === "contain" ? "is-contained" : "";

  return `<img class="${imageClass}" src="${project.image}" alt="Проект ${project.title}" loading="lazy" />`;
}

function renderProject(project) {
  const points = project.points
    ? `<ul class="project-points">${project.points.map((point) => `<li>${point}</li>`).join("")}</ul>`
    : "";
  const action = project.url
    ? `<button class="button primary" type="button" data-project-url="${project.url}">${project.linkLabel || "Открыть проект"}</button>`
    : "";

  return `
        <article class="project reveal">
          <div class="project-media">${getMedia(project)}</div>
          <div class="project-caption">
            <span class="project-status">${project.status}</span>
            <h3>${project.title}</h3>
            <span class="project-subtitle">${project.subtitle}</span>
            <p>${project.description}</p>
            ${points}
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

function renderProjects() {
  casesGrid.innerHTML = featuredProjects.map(renderProject).join("");
  secondaryCasesGrid.innerHTML = secondaryProjects.map(renderMiniProject).join("");
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
initRevealAnimation();
