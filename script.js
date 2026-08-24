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
    image: "assets/finsight-screenshot.webp",
  },
];

const secondaryProjects = [
  {
    title: "Recado",
    subtitle: "Мессенджер для международного проекта",
    status: "Публиковался в App Store",
    description: "Мобильный мессенджер на базе Matrix/Element. Участвовал в разработке мобильного продукта.",
    tags: ["iOS", "Matrix", "App Store"],
    url: "https://apps.apple.com/app/recado/id6759389840",
    image: "assets/recado-icon.webp",
    imageMode: "contain",
  },
  {
    title: "ScanFlow",
    subtitle: "Платёжное Android-приложение",
    status: "Опубликован в RuStore",
    description: "Приложение для оплаты рублями в Таиланде и Индонезии. Участвовал в технической реализации мобильного продукта.",
    tags: ["Android", "Kotlin", "REST API"],
    url: "https://www.rustore.ru/catalog/app/com.scanflow.mobile",
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
    image: "assets/github-icon.svg",
    imageMode: "contain",
  },
  {
    title: "One",
    subtitle: "Мессенджер для внутренней коммуникации сообщества",
    status: "Mobile / Product",
    description: "Участвовал в разработке мобильного мессенджера.",
    tags: ["Messaging", "Mobile", "Product"],
    url: "http://web.onemessage.ru/",
    image: "assets/one-icon.jfif",
    imageMode: "contain",
  },
];

const reviews = [
  {
    name: "Кирилл",
    date: "13 дней назад",
    text: "Приятно было работать вместе, все сделал по факту за короткое время. В будущем буду обращаться",
    service: "Сделаю telegram-бота",
    signature: "Клиент / проект",
  },
  {
    name: "Евгения",
    date: "1 год назад",
    text:
      "Отлично выполнена работа, исполнитель проконсультировал по моим вопросам, сделал бота для записи на обучающий курс. Получаю данные клиентов в Гугл таблице. Там же могу править даты курса и добавлять новые. Очень удобно",
    service: "",
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

function getCaseAttributes(project) {
  if (!project.url) {
    return "";
  }

  return `role="button" tabindex="0" data-project-url="${project.url}" aria-label="Открыть проект ${project.title}"`;
}

function getCaseShot(project) {
  if (project.image) {
    const imageClass = project.imageMode === "contain" ? "case-shot__image is-contained" : "case-shot__image";

    return `<img class="${imageClass}" src="${project.image}" alt="Скриншот проекта ${project.title}" loading="lazy" />`;
  }

  return `<span class="case-shot__label">${project.coverLabel || project.subtitle}</span>`;
}

function getCasePoints(project) {
  if (!project.points) {
    return "";
  }

  return `<ul class="case-points">${project.points.map((point) => `<li>${point}</li>`).join("")}</ul>`;
}

function renderCaseCard(project) {
  return `
        <article class="case-card reveal ${project.url ? "is-clickable" : ""}" ${getCaseAttributes(project)}>
          <div class="case-shot">${getCaseShot(project)}</div>
          <div class="case-body">
            <span class="case-status">${project.status}</span>
            <h3>${project.title}</h3>
            <strong class="case-subtitle">${project.subtitle}</strong>
            <p>${project.description}</p>
            ${getCasePoints(project)}
            <div class="tags">
              ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `;
}

function renderProjects() {
  casesGrid.innerHTML = featuredProjects.map(renderCaseCard).join("");
  secondaryCasesGrid.innerHTML = secondaryProjects.map(renderCaseCard).join("");
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
      const card = event.target.closest("[data-project-url]");

      if (card) {
        openLinkModal(card.dataset.projectUrl);
      }
    });

    grid.addEventListener("keydown", (event) => {
      const card = event.target.closest("[data-project-url]");

      if (!card || (event.key !== "Enter" && event.key !== " ")) {
        return;
      }

      event.preventDefault();
      openLinkModal(card.dataset.projectUrl);
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
        <article class="review-card reveal">
          <div class="review-meta">
            <h3>${review.name}</h3>
            <span class="review-date">${review.date}</span>
          </div>
          <p class="review-text">${review.text}</p>
          ${review.service ? `<span class="review-service">${review.service}</span>` : ""}
          <span class="review-signature">${review.signature}</span>
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
