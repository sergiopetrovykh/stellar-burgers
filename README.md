# Проектная работа 11-го спринта

[Макет](<https://www.figma.com/file/vIywAvqfkOIRWGOkfOnReY/React-Fullstack_-Проектные-задачи-(3-месяца)_external_link?type=design&node-id=0-1&mode=design>)

[Чеклист](https://www.notion.so/praktikum/0527c10b723d4873aa75686bad54b32e?pvs=4)

## Этапы работы:

1. Разверните проект и ознакомьтесь с кодом. Все необходимые вам компоненты уже созданы и лежат в папке `src/components`

2. Настройте роутинг.

3. Напишите функционал запросов данных с сервера, используя `Redux` и глобальный `store`. Сами "ручки" уже прописаны и лежат в `utils/burger-api.ts`

4. Настройте авторизацию и создайте защищённые роуты.

## Важно:

Для корректной работы запросов к серверу необходимо добавить переменную BURGER_API_URL в окружение. Сама ссылка находится в файле `.env.example`.

```
stellar-burgers
├─ .babelrc
├─ .editorconfig
├─ .eslintrc
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ main
│  │     │  └─ review
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ review
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 646c7cf9c116543207f15476b4b1e857986ed8
│  │  ├─ 09
│  │  │  └─ 59916352719e715aecb3bcb652060970e4c469
│  │  ├─ 0c
│  │  │  └─ eb89a601f1c12ab5e2b9c850052688ee7f4a22
│  │  ├─ 1c
│  │  │  └─ ab2d2c7086ddb605760bc9baceca911f7f45cf
│  │  ├─ 26
│  │  │  └─ 04832e8227acd0fa4687e41b241b2fe3c4b6d1
│  │  ├─ 27
│  │  │  └─ b43c368a7945188d2302d94fa73a5eb0ca2f58
│  │  ├─ 43
│  │  │  └─ 7c524743eac38d0e9556a1b0c10eb3a79b72b1
│  │  ├─ 4c
│  │  │  └─ 5b60b9e7f76650b99bc64943ec0aaa9665ce17
│  │  ├─ 4d
│  │  │  └─ f0cc0b5bcecbefb317e9832c88c335759ba681
│  │  ├─ 58
│  │  │  └─ 7c990ac7ba3863c4c75d87d5c188c6c22fb38a
│  │  ├─ 5d
│  │  │  └─ 110d771f799d04cdc73070ab181f0f3afd2651
│  │  ├─ 8e
│  │  │  └─ fff22f483240626823ef5b8d7bc426c4c89630
│  │  ├─ 9d
│  │  │  └─ fbd48f522121d318afdb9f2337670cc97a981f
│  │  ├─ 9e
│  │  │  ├─ 06852c913fbf9b441e7550bbe1fb15e75dcc7b
│  │  │  └─ 1dee73987627b2b4710c10ef46031a2d29f730
│  │  ├─ a6
│  │  │  └─ 334e309ef53291e196559f11ba9678984c3269
│  │  ├─ ad
│  │  │  └─ 523b2b78051004169e707bc268156399b991a6
│  │  ├─ b7
│  │  │  └─ 76b3c2a533613642d497911c15762cf101d05b
│  │  ├─ bd
│  │  │  └─ 0f80673d5466790d843aa517af7c5e0e14d7b1
│  │  ├─ c8
│  │  │  ├─ f9734988a8f12d4cd3f949cd38285fcddaa5af
│  │  │  └─ fa7dcfda7ed5b2c8aa2c699e609889e6d2954c
│  │  ├─ ce
│  │  │  └─ 25b397c49d64fa6089e69e001203857c52bbe4
│  │  ├─ e5
│  │  │  └─ 3438a753ad7a386357e4ea4fd33e6b9524f6d7
│  │  ├─ e8
│  │  │  └─ e516510b20a0105ebacbe1e82de05a0c43986c
│  │  ├─ f4
│  │  │  └─ bf02413eef2609fcc4094b420149994ceb1f21
│  │  ├─ f9
│  │  │  └─ 6a78ec2f0b5538ae3eaf3cdec6e8cb0072bf09
│  │  ├─ fa
│  │  │  └─ 7a2c84f7a449eb22d556d88b590e42e48a1ea1
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-e09cc8cef8c4fc3f0adbd33297ae2b66dc4f622d.idx
│  │     ├─ pack-e09cc8cef8c4fc3f0adbd33297ae2b66dc4f622d.pack
│  │     └─ pack-e09cc8cef8c4fc3f0adbd33297ae2b66dc4f622d.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ main
│     │  └─ review
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ review
│     └─ tags
├─ .gitignore
├─ .prettierrc
├─ .storybook
│  ├─ main.ts
│  ├─ preview.tsx
│  └─ storybook-config-entry.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ components
│  │  ├─ app
│  │  │  ├─ app.module.css
│  │  │  └─ app.tsx
│  │  ├─ app-header
│  │  │  ├─ app-header.tsx
│  │  │  └─ index.ts
│  │  ├─ burger-constructor
│  │  │  ├─ burger-constructor.tsx
│  │  │  └─ index.ts
│  │  ├─ burger-constructor-element
│  │  │  ├─ burger-constructor-element.tsx
│  │  │  ├─ index.ts
│  │  │  └─ type.ts
│  │  ├─ burger-ingredient
│  │  │  ├─ burger-ingredient.tsx
│  │  │  ├─ index.ts
│  │  │  └─ type.ts
│  │  ├─ burger-ingredients
│  │  │  ├─ burger-ingredients.tsx
│  │  │  └─ index.ts
│  │  ├─ feed-info
│  │  │  ├─ feed-info.tsx
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ ingredient-details
│  │  │  ├─ index.ts
│  │  │  └─ ingredient-details.tsx
│  │  ├─ ingredients-category
│  │  │  ├─ index.ts
│  │  │  ├─ ingredients-category.tsx
│  │  │  └─ type.ts
│  │  ├─ modal
│  │  │  ├─ index.ts
│  │  │  ├─ modal.tsx
│  │  │  └─ type.ts
│  │  ├─ order-card
│  │  │  ├─ index.ts
│  │  │  ├─ order-card.tsx
│  │  │  └─ type.ts
│  │  ├─ order-info
│  │  │  ├─ index.ts
│  │  │  └─ order-info.tsx
│  │  ├─ order-status
│  │  │  ├─ index.ts
│  │  │  ├─ order-status.tsx
│  │  │  └─ type.ts
│  │  ├─ orders-list
│  │  │  ├─ index.ts
│  │  │  ├─ orders-list.tsx
│  │  │  └─ type.ts
│  │  ├─ profile-menu
│  │  │  ├─ index.ts
│  │  │  └─ profile-menu.tsx
│  │  ├─ protected-route
│  │  │  └─ protected-route.tsx
│  │  └─ ui
│  │     ├─ app-header
│  │     │  ├─ app-header.module.css
│  │     │  ├─ app-header.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ burger-constructor
│  │     │  ├─ burger-constructor.module.css
│  │     │  ├─ burger-constructor.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ burger-constructor-element
│  │     │  ├─ burger-constructor-element.module.css
│  │     │  ├─ burger-constructor-element.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ burger-ingredient
│  │     │  ├─ burger-ingredient.module.css
│  │     │  ├─ burger-ingredient.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ burger-ingredients
│  │     │  ├─ burger-ingredients.module.css
│  │     │  ├─ burger-ingredients.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ feed-info
│  │     │  ├─ feed-info.module.css
│  │     │  ├─ feed-info.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ index.ts
│  │     ├─ ingredient-details
│  │     │  ├─ index.ts
│  │     │  ├─ ingredient-details.module.css
│  │     │  ├─ ingredient-details.tsx
│  │     │  └─ type.ts
│  │     ├─ ingredients-category
│  │     │  ├─ index.ts
│  │     │  ├─ ingredients-category.module.css
│  │     │  ├─ ingredients-category.tsx
│  │     │  └─ type.ts
│  │     ├─ modal
│  │     │  ├─ index.ts
│  │     │  ├─ modal.module.css
│  │     │  ├─ modal.tsx
│  │     │  └─ type.ts
│  │     ├─ modal-overlay
│  │     │  ├─ index.ts
│  │     │  ├─ modal-overlay.module.css
│  │     │  └─ modal-overlay.tsx
│  │     ├─ order-card
│  │     │  ├─ index.ts
│  │     │  ├─ order-card.module.css
│  │     │  ├─ order-card.tsx
│  │     │  └─ type.ts
│  │     ├─ order-details
│  │     │  ├─ index.ts
│  │     │  ├─ order-details.module.css
│  │     │  ├─ order-details.tsx
│  │     │  └─ type.ts
│  │     ├─ order-info
│  │     │  ├─ index.ts
│  │     │  ├─ order-info.module.css
│  │     │  ├─ order-info.tsx
│  │     │  └─ type.ts
│  │     ├─ order-status
│  │     │  ├─ index.ts
│  │     │  ├─ order-status.tsx
│  │     │  └─ type.ts
│  │     ├─ orders-list
│  │     │  ├─ index.ts
│  │     │  ├─ orders-list.module.css
│  │     │  ├─ orders-list.tsx
│  │     │  └─ type.ts
│  │     ├─ pages
│  │     │  ├─ common-type.ts
│  │     │  ├─ common.module.css
│  │     │  ├─ constructor-page
│  │     │  │  ├─ constructor-page.module.css
│  │     │  │  ├─ constructor-page.tsx
│  │     │  │  ├─ index.ts
│  │     │  │  └─ type.ts
│  │     │  ├─ feed
│  │     │  │  ├─ feed.module.css
│  │     │  │  ├─ feed.tsx
│  │     │  │  ├─ index.ts
│  │     │  │  └─ type.ts
│  │     │  ├─ forgot-password
│  │     │  │  ├─ forgot-password.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ index.ts
│  │     │  ├─ login
│  │     │  │  ├─ index.ts
│  │     │  │  ├─ login.tsx
│  │     │  │  └─ type.ts
│  │     │  ├─ profile
│  │     │  │  ├─ index.ts
│  │     │  │  ├─ profile.module.css
│  │     │  │  ├─ profile.tsx
│  │     │  │  └─ type.ts
│  │     │  ├─ profile-orders
│  │     │  │  ├─ index.ts
│  │     │  │  ├─ profile-orders.module.css
│  │     │  │  ├─ profile-orders.tsx
│  │     │  │  └─ type.ts
│  │     │  ├─ register
│  │     │  │  ├─ index.ts
│  │     │  │  ├─ register.tsx
│  │     │  │  └─ type.ts
│  │     │  └─ reset-password
│  │     │     ├─ index.ts
│  │     │     ├─ reset-password.tsx
│  │     │     └─ type.ts
│  │     ├─ preloader
│  │     │  ├─ index.ts
│  │     │  ├─ preloader.module.css
│  │     │  └─ preloader.tsx
│  │     └─ profile-menu
│  │        ├─ index.ts
│  │        ├─ profile-menu.module.css
│  │        ├─ profile-menu.tsx
│  │        └─ type.ts
│  ├─ images
│  │  └─ done.svg
│  ├─ index.css
│  ├─ index.tsx
│  ├─ pages
│  │  ├─ constructor-page
│  │  │  ├─ constructor-page.module.css
│  │  │  ├─ constructor-page.tsx
│  │  │  └─ index.ts
│  │  ├─ feed
│  │  │  ├─ feed.tsx
│  │  │  └─ index.ts
│  │  ├─ forgot-password
│  │  │  ├─ forgot-password.tsx
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ login
│  │  │  ├─ index.ts
│  │  │  └─ login.tsx
│  │  ├─ not-fount-404
│  │  │  ├─ index.ts
│  │  │  └─ not-fount-404.tsx
│  │  ├─ profile
│  │  │  ├─ index.ts
│  │  │  └─ profile.tsx
│  │  ├─ profile-orders
│  │  │  ├─ index.ts
│  │  │  └─ profile-orders.tsx
│  │  ├─ register
│  │  │  ├─ index.ts
│  │  │  └─ register.tsx
│  │  └─ reset-password
│  │     ├─ index.ts
│  │     └─ reset-password.tsx
│  ├─ services
│  │  ├─ rootReducer.ts
│  │  ├─ slices
│  │  │  ├─ constructorSlice.ts
│  │  │  ├─ feed.ts
│  │  │  ├─ ingredientsSlice.ts
│  │  │  ├─ ordersSlice.ts
│  │  │  └─ userSlice.ts
│  │  └─ store.ts
│  ├─ stories
│  │  ├─ assets
│  │  │  ├─ accessibility.png
│  │  │  ├─ accessibility.svg
│  │  │  ├─ addon-library.png
│  │  │  ├─ assets.png
│  │  │  ├─ avif-test-image.avif
│  │  │  ├─ context.png
│  │  │  ├─ discord.svg
│  │  │  ├─ docs.png
│  │  │  ├─ figma-plugin.png
│  │  │  ├─ github.svg
│  │  │  ├─ share.png
│  │  │  ├─ styling.png
│  │  │  ├─ testing.png
│  │  │  ├─ theming.png
│  │  │  ├─ tutorials.svg
│  │  │  └─ youtube.svg
│  │  ├─ BurgerConstructor.stories.ts
│  │  ├─ BurgerConstructorElement.stories.ts
│  │  ├─ BurgerIngredient.stories.tsx
│  │  ├─ Configure.mdx
│  │  ├─ FeedInfo.stories.ts
│  │  ├─ Header.stories.ts
│  │  ├─ IngredientDetails.stories.ts
│  │  ├─ OrderCard.stories.ts
│  │  ├─ OrderDetails.stories.tsx
│  │  ├─ OrderInfo.stories.ts
│  │  ├─ OrderStatus.stories.tsx
│  │  ├─ Preloader.stories.ts
│  │  └─ ProfileMenu.stories.ts
│  ├─ styles.d.ts
│  ├─ svg.d.ts
│  └─ utils
│     ├─ burger-api.ts
│     ├─ cookie.ts
│     └─ types.ts
├─ tsconfig.json
└─ webpack.config.js

```