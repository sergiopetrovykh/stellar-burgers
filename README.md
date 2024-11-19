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
│  │  │  ├─ 646c7cf9c116543207f15476b4b1e857986ed8
│  │  │  └─ 6f1ca47879d4b8f29825c9b0722ceb331fe3fe
│  │  ├─ 08
│  │  │  ├─ 3f535158caf0d59112c9d2e71ee2b897b758f7
│  │  │  └─ 99371d3aa6474c87c3ba4750b928d6a73a04ee
│  │  ├─ 09
│  │  │  └─ 59916352719e715aecb3bcb652060970e4c469
│  │  ├─ 0c
│  │  │  └─ eb89a601f1c12ab5e2b9c850052688ee7f4a22
│  │  ├─ 0e
│  │  │  └─ 969cb54b18edba0a1d43668ff650d3c695c407
│  │  ├─ 11
│  │  │  └─ 1096dd46c06095aca50db8f7453b1b7bcc47f2
│  │  ├─ 12
│  │  │  └─ d21d4ee434932847ea2bba6add46c59c922bca
│  │  ├─ 13
│  │  │  └─ 4bde0a257f55325e35b18e640322bdfe778102
│  │  ├─ 1c
│  │  │  └─ ab2d2c7086ddb605760bc9baceca911f7f45cf
│  │  ├─ 1e
│  │  │  └─ 9c56c1418c249ba299ef36f2d54e31deb9fb55
│  │  ├─ 26
│  │  │  └─ 04832e8227acd0fa4687e41b241b2fe3c4b6d1
│  │  ├─ 27
│  │  │  ├─ b43c368a7945188d2302d94fa73a5eb0ca2f58
│  │  │  ├─ bd025cb81a42f83a1c9f05787946fbb7ea594d
│  │  │  └─ c62a96686fbdfcd0c66b52cac4e2c3e3cb7070
│  │  ├─ 2c
│  │  │  └─ d9fc3290f8d8d2484a7199f36b0f012c3fc6d3
│  │  ├─ 2d
│  │  │  └─ bc6617649af9c3906489c9acc2107c1349a18a
│  │  ├─ 2e
│  │  │  └─ 263f7cf03b94f2f3d64a7a5a76acc3cb6d3822
│  │  ├─ 30
│  │  │  └─ d1a44cf39478a814b99dd2a90b8c77881c769a
│  │  ├─ 31
│  │  │  ├─ 9fc16d77376e026e2304d924194281768bd249
│  │  │  └─ d54309dc413af43f6d7955457d8dbc64a19a2a
│  │  ├─ 33
│  │  │  └─ f2a64971a218bf83da2023e651d52ebb39d7d6
│  │  ├─ 3b
│  │  │  ├─ 4013c53c1de24b1ecb209d550b122a1e94110b
│  │  │  └─ 4baefe108314ddf7dcaee811b112377ca9881a
│  │  ├─ 40
│  │  │  ├─ 45d9d4d71f565fce7898dc3e5a2e87b4721276
│  │  │  └─ accc44a7ee93e90482394dea7b55af61dd6ecd
│  │  ├─ 41
│  │  │  ├─ 7a6e3fdfdb4bd58a3170da56c6308334651659
│  │  │  └─ 9014e39f39933712939db525389bbfa0d167e1
│  │  ├─ 43
│  │  │  └─ 7c524743eac38d0e9556a1b0c10eb3a79b72b1
│  │  ├─ 45
│  │  │  └─ 53e4ee42139f4b38fe9b3e9d3e11eaf8596b82
│  │  ├─ 46
│  │  │  └─ 1a3b9800332f51adcdfd84508981a974569da8
│  │  ├─ 47
│  │  │  ├─ 3d4cfd71136a8ba4d56857c76a29e1fdddc424
│  │  │  └─ 52cc1e9c4cb770bb36e461fb1da91002b23650
│  │  ├─ 4b
│  │  │  └─ a7010babd9fa0bf94e91c0810fcafc849acdae
│  │  ├─ 4c
│  │  │  ├─ 5b60b9e7f76650b99bc64943ec0aaa9665ce17
│  │  │  └─ c5714031f483de6cdb795b157a7ded75fdf6be
│  │  ├─ 4d
│  │  │  ├─ 6d74810ece8f63d08dbce2c060c82261238b77
│  │  │  ├─ d61c6fba271a60aff0c82c4681bd5e55dc6b83
│  │  │  └─ f0cc0b5bcecbefb317e9832c88c335759ba681
│  │  ├─ 4e
│  │  │  ├─ 686a40e279ccd5bff93c2da85409951ab62516
│  │  │  └─ e60e062760a98325f1d62bfe9e3a887520d7cd
│  │  ├─ 51
│  │  │  └─ 3d92d9a50e1141279f41b8f3a637915adcb67d
│  │  ├─ 58
│  │  │  ├─ 1e18f8e6ac3bb8f5e1f9992a089b9786a46469
│  │  │  └─ 7c990ac7ba3863c4c75d87d5c188c6c22fb38a
│  │  ├─ 5d
│  │  │  └─ 110d771f799d04cdc73070ab181f0f3afd2651
│  │  ├─ 65
│  │  │  └─ d4076897784635b665f5a54371efe298f4cfdd
│  │  ├─ 66
│  │  │  └─ 1efc548da25b082d6d2ae3a5c3ce0c37886d27
│  │  ├─ 69
│  │  │  └─ 3c38758269db011fec6d3a13c57269e73daa96
│  │  ├─ 6a
│  │  │  └─ 160723a2ed05c0af22eeca50670a19932508b0
│  │  ├─ 6b
│  │  │  └─ 76c9fb3ca0b6e7283515ac4c06c91cf3200265
│  │  ├─ 6c
│  │  │  └─ bc385908986fd1849a8f1dbcde4fcc1c1adbee
│  │  ├─ 73
│  │  │  └─ 076c174495cda91f453cf292aeb38ce500bd9f
│  │  ├─ 77
│  │  │  ├─ dd8e8c66ea53cab9be8839a66a211b5e769d5d
│  │  │  └─ f9b6d543f9b440d5b5829599fd830f43ed8a5f
│  │  ├─ 78
│  │  │  └─ d3bf17ca05e106c0511b71e31b9c2dbc58da1c
│  │  ├─ 79
│  │  │  └─ 8486ac228ac90eedc406089af1b8ad81fbda16
│  │  ├─ 7e
│  │  │  ├─ 476bd35150a4779b8d525fd56ac10a8d41517f
│  │  │  └─ 541511130371d31f75453ba10cafe3ea3cc552
│  │  ├─ 80
│  │  │  └─ 53f5625595b1227d5fe92a79b4635b285f5ffb
│  │  ├─ 82
│  │  │  └─ e842c71eae7b6b4f4919925ef9375c87a4b21d
│  │  ├─ 87
│  │  │  └─ 3cabef0ea3cb72a2e95f0b06f215c342248af7
│  │  ├─ 88
│  │  │  ├─ 23b545c08632bb739cc89ec039310bbcbeafa4
│  │  │  └─ b01b1ebbb98154daa1ec2cde477717c194003f
│  │  ├─ 89
│  │  │  ├─ 782675911cbf60ee9d5e426d5a3c7a19ba2e18
│  │  │  └─ d6dcd85abf68a1e22ca778a995ff5a2c5c4d4c
│  │  ├─ 8b
│  │  │  ├─ 04b68af9a08d9ab6fdfb333bc13e958522d519
│  │  │  └─ c3f6083b28591d6acdb34f17ca145a4d6e49cc
│  │  ├─ 8e
│  │  │  └─ fff22f483240626823ef5b8d7bc426c4c89630
│  │  ├─ 93
│  │  │  └─ 2ad024de31ba6e99629a13c704db41a2ddafa3
│  │  ├─ 96
│  │  │  └─ 585e72c7cc06017442ca22941a00f23f66932c
│  │  ├─ 9c
│  │  │  └─ ade785b27a037787769b871b83004d71f447a8
│  │  ├─ 9d
│  │  │  └─ fbd48f522121d318afdb9f2337670cc97a981f
│  │  ├─ 9e
│  │  │  ├─ 06852c913fbf9b441e7550bbe1fb15e75dcc7b
│  │  │  ├─ 1dee73987627b2b4710c10ef46031a2d29f730
│  │  │  └─ 676cfe20bf0c7966b15a2c537e47bfed028f4e
│  │  ├─ a2
│  │  │  ├─ 97c95cb321a65bef371356197559c0bf58e1a3
│  │  │  └─ ceeedbc24ee54d03df6fb3056d503619238cc0
│  │  ├─ a3
│  │  │  └─ dc533d122ef86505aaa7e159882aedac9d9125
│  │  ├─ a5
│  │  │  └─ c1ec08e7ffc048b9a26d3b4a8ddf95b4ac2928
│  │  ├─ a6
│  │  │  └─ 334e309ef53291e196559f11ba9678984c3269
│  │  ├─ a9
│  │  │  └─ 77cd9b6b4bdf8dc20788b9d31cb7fc10416317
│  │  ├─ ad
│  │  │  └─ 523b2b78051004169e707bc268156399b991a6
│  │  ├─ b3
│  │  │  └─ 1cead5ad396d044da7d8bbe93fcbc2993a3cda
│  │  ├─ b7
│  │  │  └─ 76b3c2a533613642d497911c15762cf101d05b
│  │  ├─ ba
│  │  │  └─ d9c927b571ee19e5b55218311772d55d1cb296
│  │  ├─ bb
│  │  │  └─ d62e0b4bf0ca75e3203f2e2d4d3bc128151ebe
│  │  ├─ bd
│  │  │  └─ 0f80673d5466790d843aa517af7c5e0e14d7b1
│  │  ├─ bf
│  │  │  ├─ 022699e18a085df8b83922f4ce04876223172f
│  │  │  └─ d1fd2da4966353cd7e46fef3a2e983984317b8
│  │  ├─ c8
│  │  │  ├─ db4ca75b62e41f926e0e0ba55e08a6385f105d
│  │  │  ├─ f9734988a8f12d4cd3f949cd38285fcddaa5af
│  │  │  └─ fa7dcfda7ed5b2c8aa2c699e609889e6d2954c
│  │  ├─ c9
│  │  │  └─ 59a1c3bd378b394d823a61abf8ff124a2a6446
│  │  ├─ ca
│  │  │  └─ badfb30002c3a6e7694e58f4d4a39091d370e2
│  │  ├─ cc
│  │  │  └─ f130a2837e14dded71df29cc244cb683b7e4ee
│  │  ├─ cd
│  │  │  └─ dd665218b6f351311c3764f8ea2b56531ebca3
│  │  ├─ ce
│  │  │  ├─ 25b397c49d64fa6089e69e001203857c52bbe4
│  │  │  └─ 86ea9c3979b7bab8e0ff9761f03b6c1eca0ba0
│  │  ├─ cf
│  │  │  ├─ 5fc5c5e2c69059d378da835d87c8de76a90578
│  │  │  ├─ bc913bc8064205eb17f5b7963d241e9224561f
│  │  │  └─ ee916f81b3e5b735e2857438ae1cb23642d621
│  │  ├─ d2
│  │  │  └─ c2e9f23d15a47866e1b9350645ff1451eaeae7
│  │  ├─ d9
│  │  │  └─ a756ef72e8a2ca90d92cc730c85f3b19fcbf65
│  │  ├─ df
│  │  │  └─ b61e437c7b6a30155f6d741dc5ab6ab295f54f
│  │  ├─ e3
│  │  │  └─ 07e7e6a08fdbfdb766732855b662ba50c2c18b
│  │  ├─ e5
│  │  │  └─ 3438a753ad7a386357e4ea4fd33e6b9524f6d7
│  │  ├─ e6
│  │  │  └─ 2302323d1346571575a749223f7c7364b82be1
│  │  ├─ e8
│  │  │  ├─ 773c0266f829463c37ddfef3c47ab7b414eb79
│  │  │  └─ e516510b20a0105ebacbe1e82de05a0c43986c
│  │  ├─ ea
│  │  │  └─ 8c4bb5c5e2f6df6b5811268f6092253bcef9c2
│  │  ├─ ef
│  │  │  └─ f109b43a6ed986e477dbbf8ef3b499502007ea
│  │  ├─ f4
│  │  │  ├─ 8ba632b40d8011bcbadb94e2e583e198b65fa7
│  │  │  └─ bf02413eef2609fcc4094b420149994ceb1f21
│  │  ├─ f5
│  │  │  └─ 76713fe00b39f511812f9e83db334f733bf9b1
│  │  ├─ f6
│  │  │  └─ 78f96887a42c3fb82a26edd54524fd2469b951
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
│  │  │  ├─ index.ts
│  │  │  ├─ ingredientsSlice.ts
│  │  │  ├─ orderSlice.ts
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