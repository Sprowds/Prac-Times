<!-- prettier-ignore -->
# Prac-Times

## Что это
Учебный проект новостного сайта, заточенного под политику и бизнес в мире.



## Stack
- React
- TypeScript
- CSS Modules
- React Router
- React Redux



## Структура

src/
  assets/
  components/
    AnotherNews
    Article/
      ArticleCard
      CompactArticle
    Exclusives
    Footer
    Header
    Layout
    MainArticle
    Navigation
    News
    Pagination
    SearchFilters
    SearchResults
  data/
  hooks/
  pages/
    MainPage
    NotFoundPage
    SearchPage
    WorldNewsPage
  store/
    store.ts
    newsSlice.ts
  styles/
  types/
  ui/
    NewsTag
    NewsTitle
    NewsTime
  utils/
  App.tsx
  main.tsx

### assets/
Вспомогательные материалы для дизайна самого сайта.

### components/
Переиспользуемые компоненты сайта.

### data/
Данные, которые используются эмулятором backend.

### hooks/
Кастомные хуки.

### pages/
Отдельные страницы сайта.

### store/
Хранилище состояний и функции React Redux.

### styles/
Общие стили сайта(Шрифты, обнуление, цвета).

### types/
Общие TypeScript-типы, стоящие вынесения в отдельную папку.

### ui/
Переиспользуемые микро-компоненты(Кнопки, заголовки, тэги и т.д)

### utils/
Вспомогательные функции.



## Поток данных

Новости -----------------------------------------------------
В данный момент данные новостей берутся через обращение компонентов к эмулятору backend(src/utils/backendEmulatorAPI.ts) ассинхронными thunk функциям в Redux slice. После чего они записываются в состояния. Пока без проверок на ошибки и целостность.

## 