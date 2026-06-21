const projects = [
  {
    title: "FinSight",
    subtitle: "AI-трекер личных финансов",
    status: "Опубликован в RuStore",
    description: "Приложение для учёта доходов и расходов с AI-разбором через DeepSeek.",
    tags: ["React Native", "Expo", "AI", "RuStore"],
    url: "https://www.rustore.ru/catalog/app/com.finsight.mvp",
    image: "assets/finsight-screenshot.webp",
  },
  {
    title: "AI-бот бронирования",
    subtitle: "MAX-бот для базы отдыха",
    status: "MAX / AI",
    description:
      "Бот отвечает на вопросы, помогает с бронированием, учитывает контекст диалога и передаёт заявки администратору.",
    tags: ["MAX Bot", "AI", "CRM", "Booking"],
    url: "https://max.ru/id524706834883_bot",
    image: "assets/booking-bot-prichal.jfif",
  },
  {
    title: "ScanFlow",
    subtitle: "Платёжное Android-приложение",
    status: "Android / RuStore",
    description: "Приложение для сценария оплаты рублями в Таиланде и Индонезии.",
    tags: ["Android", "Kotlin", "REST API", "RuStore"],
    url: "https://www.rustore.ru/catalog/app/com.scanflow.mobile",
    image: "assets/scanflow-logo.svg",
    imageMode: "contain",
  },
  {
    title: "Recado",
    subtitle: "Мессенджер для Анголы",
    status: "Опубликован в App Store",
    description: "Мобильный мессенджер на базе Matrix/Element для международного проекта.",
    tags: ["iOS", "Matrix", "App Store"],
    url: "https://apps.apple.com/app/recado/id6759389840",
    image: "assets/recado-icon.webp",
    imageMode: "contain",
  },
  {
    title: "One",
    subtitle: "Мессенджер для Движения Первых",
    status: "Mobile / Product",
    description: "Мессенджер для коммуникации внутри сообщества.",
    tags: ["Messaging", "Mobile", "Product"],
    url: "http://web.onemessage.ru/",
    image: "assets/one-icon.jfif",
    imageMode: "contain",
  },
  {
    title: "AI-помощник аналитика",
    subtitle: "Проект для СБЕР",
    status: "AI / Automation",
    description: "AI-инструмент для помощи в аналитических задачах.",
    tags: ["AI", "Analytics", "Automation"],
    url: "https://github.com/S0lerro/AI-Helper-analytics",
    image: "assets/github-icon.svg",
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

  return "Скриншот проекта";
}

function renderProjects() {
  casesGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="case-card reveal ${project.url ? "is-clickable" : ""}" ${getCaseAttributes(project)}>
          <div class="case-shot">${getCaseShot(project)}</div>
          <div class="case-body">
            <span class="case-status">${project.status}</span>
            <h3>${project.title}</h3>
            <strong class="case-subtitle">${project.subtitle}</strong>
            <p>${project.description}</p>
            <div class="tags">
              ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
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
  casesGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project-url]");

    if (card) {
      openLinkModal(card.dataset.projectUrl);
    }
  });

  casesGrid.addEventListener("keydown", (event) => {
    const card = event.target.closest("[data-project-url]");

    if (!card || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    openLinkModal(card.dataset.projectUrl);
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
