## Как развернуть проект

1. Используйте node `22.11.0`
2. Создайте .env в корне проекта, скопировав .env.example
3. Выполните чистую установку `npm ci`
4. Запустите dev server `npm run dev`

# На проекте используется архитектурная методология [Feature-Sliced Design (FSD)](https://feature-sliced.github.io/documentation/docs/get-started/overview)

## [FSD Telegram](https://t.me/feature_sliced)

## Схема слоев

- [`app`](./app) — настройки, стили и провайдеры для всего приложения.
- [`pages`](./src/pages) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
- [`widgets`](./src/widgets) — композиционный слой для соединения сущностей и фич в самостоятельные блоки (например, IssuesList, UserProfile).
- [`features`](./src/features) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя. (например, SendComment, AddToCart, UsersSearch)
- [`entities`](./src/entities) — бизнес-сущности. (например, User, Product, Order)
- [`shared`](./src/shared) — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса. (например, UIKit, libs, API)
