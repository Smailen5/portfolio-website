# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [5.4.4](https://github.com/Smailen5/portfolio-website/compare/v5.4.3...v5.4.4) (2026-08-31)


### Bug Fixes

* aggiunge icona nextui agli assets sostituendo nextjs ([#229](https://github.com/Smailen5/portfolio-website/issues/229)) ([d1e585a](https://github.com/Smailen5/portfolio-website/commit/d1e585ac9016098905e6b5d870b95c31c4e98ed5))
* gestisce errori e stato di caricamento nel fetch dei progetti ([#233](https://github.com/Smailen5/portfolio-website/issues/233)) ([0042325](https://github.com/Smailen5/portfolio-website/commit/0042325592f260f396db1cad5d46fff835d52819))
* ordina i progetti per createdAt decrescente in Latest ([#231](https://github.com/Smailen5/portfolio-website/issues/231)) ([e17dc8d](https://github.com/Smailen5/portfolio-website/commit/e17dc8df92dda359fbb12d57770e8c8360782a05))
* rimuove main annidato per validità HTML e accessibilità ([#228](https://github.com/Smailen5/portfolio-website/issues/228)) ([98a353c](https://github.com/Smailen5/portfolio-website/commit/98a353c3b5e79520a84993f8ffb26c9f9499c351))
* rimuove slice no-op in getInitials ([#230](https://github.com/Smailen5/portfolio-website/issues/230)) ([2aef286](https://github.com/Smailen5/portfolio-website/commit/2aef28652c8e579e2f118d31a524f64ff96daf2c))
* rimuove template literal inutile in Card ([#227](https://github.com/Smailen5/portfolio-website/issues/227)) ([4751cb6](https://github.com/Smailen5/portfolio-website/commit/4751cb6daf9d3f80e89b47291631e2f48c656efa))


### Documentation

* semplifica CONVENTION.md e AGENTS.md ([#220](https://github.com/Smailen5/portfolio-website/issues/220)) ([bbb4c4a](https://github.com/Smailen5/portfolio-website/commit/bbb4c4af972535a78327891e4bb38708c3a9c582))


### Chores

* applica formattazione prettier ([#232](https://github.com/Smailen5/portfolio-website/issues/232)) ([8959806](https://github.com/Smailen5/portfolio-website/commit/8959806f311d75dffef956d4169ea39139bcee34))
* sostituisce max-w-256 con max-w-5xl nelle classi Tailwind ([#226](https://github.com/Smailen5/portfolio-website/issues/226)) ([ea93f25](https://github.com/Smailen5/portfolio-website/commit/ea93f251ab4c780ae6f8d3fcfe9080b3046c40d5))


### Refactoring

* rimuove commenti all'inizio dei file ([#223](https://github.com/Smailen5/portfolio-website/issues/223)) ([b26cd0f](https://github.com/Smailen5/portfolio-website/commit/b26cd0f5e8db83a00bb532f14703687966c35013))
* sposta fetchProjects dentro useProjects e rimuove src/api ([#222](https://github.com/Smailen5/portfolio-website/issues/222)) ([cc4833b](https://github.com/Smailen5/portfolio-website/commit/cc4833baccbfc8412427bcfb700685e22b143272))
* unifica fetch progetti con hook useProjects condiviso ([#215](https://github.com/Smailen5/portfolio-website/issues/215)) ([8267445](https://github.com/Smailen5/portfolio-website/commit/82674450fb6ba5c4ea7d91858d119fcee0b68198))

## [5.4.3](https://github.com/Smailen5/portfolio-website/compare/v5.4.2...v5.4.3) (2026-08-20)


### Bug Fixes

* ripristina animazione typing nella scritta hero ([#205](https://github.com/Smailen5/portfolio-website/issues/205)) ([54a9283](https://github.com/Smailen5/portfolio-website/commit/54a92839819e496d1a28ae4c2081d643324a7e22))


### Chores

* rimuove componenti e asset mai usati ([#207](https://github.com/Smailen5/portfolio-website/issues/207)) ([389c814](https://github.com/Smailen5/portfolio-website/commit/389c8148874b0c360d1ef8050d1c7364eb3d08af))
* rimuove export inutilizzati ([#210](https://github.com/Smailen5/portfolio-website/issues/210)) ([68cb6c4](https://github.com/Smailen5/portfolio-website/commit/68cb6c4523a81f8914902fb31a25d0a2aa7d28e2))
* rimuove frammenti inutili, className vuote e commenti obsoleti ([#213](https://github.com/Smailen5/portfolio-website/issues/213)) ([1559281](https://github.com/Smailen5/portfolio-website/commit/15592818cbe124094d404d33865d33e383719fea))
* rivede configurazione deploy netlify e aggiunge file netlify.toml ([#214](https://github.com/Smailen5/portfolio-website/issues/214)) ([da4f9eb](https://github.com/Smailen5/portfolio-website/commit/da4f9ebe4162f7c2bdc31d42077216b2b1e06ab7))


### Refactoring

* centralizza meta tags Open Graph in metaTags.ts ([#209](https://github.com/Smailen5/portfolio-website/issues/209)) ([e470859](https://github.com/Smailen5/portfolio-website/commit/e470859e45887141a08930427a8e0f500422bd89))

## [5.4.2](https://github.com/Smailen5/portfolio-website/compare/v5.4.1...v5.4.2) (2026-08-13)


### Bug Fixes

* aggiunge attributi aria alla sidebar e ai bottoni ([#157](https://github.com/Smailen5/portfolio-website/issues/157)) ([aaa05c7](https://github.com/Smailen5/portfolio-website/commit/aaa05c711ff6927c1e704a6b73f04cfd39c2779d))
* aggiunge spazio prima di lg:hidden ([#168](https://github.com/Smailen5/portfolio-website/issues/168)) ([f073b90](https://github.com/Smailen5/portfolio-website/commit/f073b90c70b3fd2e2fb0de7a784cbef7bbbdcb6f))
* corregge anteprima immagini e bottone dettagli ([#180](https://github.com/Smailen5/portfolio-website/issues/180)) ([714d02d](https://github.com/Smailen5/portfolio-website/commit/714d02d0ac8d7cbbd2b4906b389e49076ddfe499))
* corregge classi Tailwind inesistenti e configura whitelist ESLint ([#171](https://github.com/Smailen5/portfolio-website/issues/171)) ([f2d9183](https://github.com/Smailen5/portfolio-website/commit/f2d9183c525c282601192db10400d2e9b88c3f8b))
* corregge configurazione css di DaisyUI ([#159](https://github.com/Smailen5/portfolio-website/issues/159)) ([0bbe78e](https://github.com/Smailen5/portfolio-website/commit/0bbe78e14ea79cb37b6eff85d2286c2b2ac2d42f))
* corregge filtro tecnologie in projects ([#161](https://github.com/Smailen5/portfolio-website/issues/161)) ([cb6a69e](https://github.com/Smailen5/portfolio-website/commit/cb6a69e075745657346974aa317830aecd5a4902))
* corregge testo alt delle icone skill ([#160](https://github.com/Smailen5/portfolio-website/issues/160)) ([4d22c30](https://github.com/Smailen5/portfolio-website/commit/4d22c30c6109a622a09cddbb48c08e1dcdd56174))
* migliora semantica html e aggiunge h1 per route ([#162](https://github.com/Smailen5/portfolio-website/issues/162)) ([466e427](https://github.com/Smailen5/portfolio-website/commit/466e42779d0bcc8b3515a3583a9eabdc7caac40f))
* rende controllata la checkbox del toggle tema ([#173](https://github.com/Smailen5/portfolio-website/issues/173)) ([c3f9766](https://github.com/Smailen5/portfolio-website/commit/c3f97665dfb2e4aa5f3ed50038a94ec6c5163013))
* rende efficace il controllo useTheme fuori dal provider ([#166](https://github.com/Smailen5/portfolio-website/issues/166)) ([7b1515f](https://github.com/Smailen5/portfolio-website/commit/7b1515f1ae75286705645c7cbd0c23f32b2a0b1a))
* rimuove params stringa dai Link di navigazione ([#164](https://github.com/Smailen5/portfolio-website/issues/164)) ([97a3eb9](https://github.com/Smailen5/portfolio-website/commit/97a3eb96f00e2bb637e90b4ee7687228889a54f7))
* ripristina animazione fade durante cambio avatar ([#174](https://github.com/Smailen5/portfolio-website/issues/174)) ([fd52dd8](https://github.com/Smailen5/portfolio-website/commit/fd52dd8dfeec1dc4b15020375931f7bc459e2b23))
* sostituisce `srcSet` con `src` nelle icone social ([#158](https://github.com/Smailen5/portfolio-website/issues/158)) ([8e2c39f](https://github.com/Smailen5/portfolio-website/commit/8e2c39f72c6cd12a41b979fc0982c86496926b39))
* sostituisce Link con tag a per URL esterni ([#163](https://github.com/Smailen5/portfolio-website/issues/163)) ([25710ca](https://github.com/Smailen5/portfolio-website/commit/25710ca9ccd015efa0f8df249f4f704bb11124b1))


### Chores

* aggiunge eslint-plugin-tailwindcss ([#169](https://github.com/Smailen5/portfolio-website/issues/169)) ([f103219](https://github.com/Smailen5/portfolio-website/commit/f103219f1ab6e2c2026c162191760c4af281e5db))
* aggiunge template issue markdown per CLI ([#185](https://github.com/Smailen5/portfolio-website/issues/185)) ([47ef54a](https://github.com/Smailen5/portfolio-website/commit/47ef54abaf9cf8cd4d4cf46890e42a9918dc1bbd))
* aggiunge variabili d'ambiente con .env e .env.example ([#137](https://github.com/Smailen5/portfolio-website/issues/137)) ([040ec63](https://github.com/Smailen5/portfolio-website/commit/040ec63bab9a68a7e25cb74b3c784c8f05a40f20))
* allinea configurazione TypeScript, CI e commitlint ([#139](https://github.com/Smailen5/portfolio-website/issues/139)) ([eca79de](https://github.com/Smailen5/portfolio-website/commit/eca79dee1d834e70c039c29aa7be8e243f11b160))
* rimuove checklist di controllo ([#182](https://github.com/Smailen5/portfolio-website/issues/182)) ([28e1660](https://github.com/Smailen5/portfolio-website/commit/28e16602f481ef20c049bf497fcc870b9fb68ddc))
* rimuove codice morto non utilizzato ([#165](https://github.com/Smailen5/portfolio-website/issues/165)) ([a91f1aa](https://github.com/Smailen5/portfolio-website/commit/a91f1aa07b16099f9e527851ed86ee1f3e589ecf))
* uniforma e semplifica gli script pnpm ([#140](https://github.com/Smailen5/portfolio-website/issues/140)) ([02af7a2](https://github.com/Smailen5/portfolio-website/commit/02af7a27342e6c3153b1b70a64ea660a81cddbee))


### Refactoring

* migra fetchProjects per chiamare server-portfolio ([#175](https://github.com/Smailen5/portfolio-website/issues/175)) ([e36be3e](https://github.com/Smailen5/portfolio-website/commit/e36be3e153285984962dddf5f99a85b847173ca5))
* rinomina proprieta nelle interfacce ([#184](https://github.com/Smailen5/portfolio-website/issues/184)) ([614df19](https://github.com/Smailen5/portfolio-website/commit/614df19a989262a3d5143ed275b4f510d37dc9a9))

## [5.4.1](https://github.com/Smailen5/portfolio-website/compare/v5.4.0...v5.4.1) (2026-07-27)


### Chores

* aggiorna template issue e allinea a standard ([#127](https://github.com/Smailen5/portfolio-website/issues/127)) ([46045f5](https://github.com/Smailen5/portfolio-website/commit/46045f521605bad8d7932c0dff7f21597ac1c681))
* aggiorna template pull request e allinea a standard ([#129](https://github.com/Smailen5/portfolio-website/issues/129)) ([96afb7b](https://github.com/Smailen5/portfolio-website/commit/96afb7beebf3ee47f9f756407a6b7ab5183430d7))
* aggiunge file AGENTS.md, CONVENTION.md e struttura .opencode ([#132](https://github.com/Smailen5/portfolio-website/issues/132)) ([b043846](https://github.com/Smailen5/portfolio-website/commit/b0438464e5abe73b00f495c0957e544b21a1d6c6))
* aggiungi husky e commitlint ([#128](https://github.com/Smailen5/portfolio-website/issues/128)) ([a0166d1](https://github.com/Smailen5/portfolio-website/commit/a0166d17520dec08b91318fee1d3173063257ba1))
* migra a release-please e configura CI/CD ([#125](https://github.com/Smailen5/portfolio-website/issues/125)) ([7f8b84e](https://github.com/Smailen5/portfolio-website/commit/7f8b84ed269f1d4b9b6e7dcbd06acdfaec98f606))
* ottimizza hook per commit e pre-push ([#133](https://github.com/Smailen5/portfolio-website/issues/133)) ([4614bc8](https://github.com/Smailen5/portfolio-website/commit/4614bc82891cb0befd0ac1bcc3af7ed7069ce8dd))
* rimuove template pr non utilizzati ([#130](https://github.com/Smailen5/portfolio-website/issues/130)) ([c6354e3](https://github.com/Smailen5/portfolio-website/commit/c6354e35b6ab23091f494cbaed652d2336d6ce85))


### Refactoring

* 🔄 aggiunge il caricamento lazy per le immagini nel componente CardProject ([76d9a6a](https://github.com/Smailen5/portfolio-website/commit/76d9a6ab7791639781068d943a5dac3514fbb98b))
* 🔄 disabilita i link di download nel componente CurriculumDownload ([b8248dc](https://github.com/Smailen5/portfolio-website/commit/b8248dce551f4813d36051c891b0d3eb3ed569f1))
* 🔄 migliora la gestione dei nomi dei progetti nel componente CardProject ([79b0821](https://github.com/Smailen5/portfolio-website/commit/79b08219907d08cf40e63d9dfbfd126abbdba9b5))
* 🔄 migliora la gestione delle immagini e semplifica il rendering nel componente CardProject ([a3326a2](https://github.com/Smailen5/portfolio-website/commit/a3326a284cc85f7d2e8ac972426aefc3c3916f18))
* 🔄 migliora la gestione delle tecnologie nel componente CardProject ([75813d9](https://github.com/Smailen5/portfolio-website/commit/75813d9792113e47e107c88b8800c4518b1c73e4))
* 🔄 migliora la tipizzazione e l'accessibilità nel componente CardProject ([0750774](https://github.com/Smailen5/portfolio-website/commit/0750774d5a5cdda897f1a046c5cba033e1cd5423))
* 🔄 semplifica il rendering e migliora l'accessibilità nel componente CardProject ([9445a79](https://github.com/Smailen5/portfolio-website/commit/9445a7969cf33a9132aff26fc649653e770f3eb7))

## [5.4.0](https://github.com/Smailen5/portfolio-website/compare/v5.3.1...v5.4.0) (2025-12-03)


### Features

* ✨ aggiungi animazione per il carousel infinito ([114a6ec](https://github.com/Smailen5/portfolio-website/commit/114a6ec088a0e5d9219b63ab381f5bf7565ea4d9))
* ✨ aggiungi componente SkillsCarousel ([0ea1c84](https://github.com/Smailen5/portfolio-website/commit/0ea1c848c7309793f42ffdb09f1470912650e539))
* ✨ aggiungi SkillsSection alla pagina About ([4cc905d](https://github.com/Smailen5/portfolio-website/commit/4cc905d37cfa6f546241e45389c0cdd205de251d))
* ✨ aggiungi supporto per la proprietà noTitle nel componente SkillsSection ([157fb51](https://github.com/Smailen5/portfolio-website/commit/157fb51ba0603486b44b9f1ce383f882e1e52e40))
* ✨ aggiungi supporto per la proprietà textCenter nel componente H2 ([0ec0431](https://github.com/Smailen5/portfolio-website/commit/0ec0431e3b5217601fd4be93a9298898749d5c05))
* ✨ aggiungi supporto per la visualizzazione condizionale del nome nella SkillCard ([043474c](https://github.com/Smailen5/portfolio-website/commit/043474c2d82cdbef896ee7157b5e6b8e0a2ef25d))
* ✨ aggiungi supporto per la visualizzazione del carousel nella SkillCard ([665f3fc](https://github.com/Smailen5/portfolio-website/commit/665f3fc2a57b6babd1ddc25ab801aabcfde9b6f6))
* ✨ aggiungi supporto per screen reader nel componente H2 ([3ccca77](https://github.com/Smailen5/portfolio-website/commit/3ccca771cd3032eb762f6942a4a232bbc4fef0fc))
* ✨ aggiungi titolo al SkillsCarousel ([185020b](https://github.com/Smailen5/portfolio-website/commit/185020be63bb4d74f8d8d5c3a5f8fa4eee620912))
* ✨ rendi Navbar fixed durante lo scroll ([95c8d01](https://github.com/Smailen5/portfolio-website/commit/95c8d0139df7253c00f28af49c8395bc015c76dc))
* 💄 aggiungi griglia responsive per SkillCategory ([968dca7](https://github.com/Smailen5/portfolio-website/commit/968dca737c9ff04c5bcec4975e1641319c5723d1))


### Bug Fixes

* 🐛 corregge la classe di visualizzazione nel componente SkillsCarousel ([3ed9351](https://github.com/Smailen5/portfolio-website/commit/3ed93515dfe2f5a3efe6951cc31577e191864af6))
* 🐛 corregge la logica di assegnazione delle classi nel componente H2 ([ab79902](https://github.com/Smailen5/portfolio-website/commit/ab7990276d257a8b89028e362064db7f7ad75692))
* 🐛 correggi overflow nel SkillsCarousel ([422ed2e](https://github.com/Smailen5/portfolio-website/commit/422ed2ef37e5d7bb44d1ef212a7e24b53d01dc0a))
* 🐛 riposiziona il componente SkillsSection nella pagina About ([5e16c8a](https://github.com/Smailen5/portfolio-website/commit/5e16c8aec01aa00ea08d91d6b9993615edb48868))

### [5.3.1](https://github.com/Smailen5/portfolio-website/compare/v5.3.0...v5.3.1) (2025-11-18)


### Bug Fixes

* ♿ aggiorna i colori primari nel file app.css per coerenza visiva ([43d25dc](https://github.com/Smailen5/portfolio-website/commit/43d25dc841b66c3f2a17e2312b8cc24c6d40d097))
* ♿ migliora l'accessibilita' del componente Icon ([2f7cd03](https://github.com/Smailen5/portfolio-website/commit/2f7cd03d6a6d5c681d4c4d7110e2aa3301f95c30))
* ♿ migliora l'accessibilita' del componente ToggleTheme ([ff066c4](https://github.com/Smailen5/portfolio-website/commit/ff066c45a0202b38d09a65fd8db3bc03ea5927af))
* 💄 aggiorna i colori dei link nel componente Presentazione e Footer per coerenza visiva ([94ee64e](https://github.com/Smailen5/portfolio-website/commit/94ee64e264e5a62995853588dd21cfb08e7f8389))
* 💄 aggiorna il colore del testo nel componente SkillCard per coerenza visiva ([df19e64](https://github.com/Smailen5/portfolio-website/commit/df19e64eb24ff2936d325b396441ea024e4adc64))
* 💄 aggiorna il colore di sfondo del componente Card per una migliore coerenza visiva ([77914ef](https://github.com/Smailen5/portfolio-website/commit/77914effe7f221588f3990a66c26c9cedaff2218))
* 💄 corregge la formattazione del testo nel componente AboutPage ([3a5ddbe](https://github.com/Smailen5/portfolio-website/commit/3a5ddbeb29c65c5d94427e5d0dc97373c91f40e5))

## [5.3.0](https://github.com/Smailen5/portfolio-website/compare/v5.2.0...v5.3.0) (2025-11-10)


### Features

* ✨ aggiorna il componente Presentation con nuovi elementi e contenuti ([ad94be2](https://github.com/Smailen5/portfolio-website/commit/ad94be2aaeee639d749f9fb908d5db6d8be8da3b))
* ✨ aggiungi il componente H3 per migliorare la gerarchia dei titoli ([75f08d4](https://github.com/Smailen5/portfolio-website/commit/75f08d467b7e81c6697b1d42ac3387ffaf6eec5e))

## [5.2.0](https://github.com/Smailen5/portfolio-website/compare/v5.1.0...v5.2.0) (2025-10-31)


### Features

* ✨ aggiorna i metadati della pagina "About" con descrizione e parole chiave dettagliate ([e6d91a0](https://github.com/Smailen5/portfolio-website/commit/e6d91a0e41a1c217049fd29d5bfed1552b4a677d))
* ✨ aggiorna i metadati Open Graph per migliorare la condivisione sui social ([b9e8345](https://github.com/Smailen5/portfolio-website/commit/b9e834532fc4b4b8118aa72382a9f042108a7482))
* ✨ aggiorna la pagina "About" con componenti Head e Layout ([160a261](https://github.com/Smailen5/portfolio-website/commit/160a2618af62460fa65a00f9806cf4739748a062))
* ✨ aggiorna la pagina "About" con contenuti e separatori ([639e19e](https://github.com/Smailen5/portfolio-website/commit/639e19e11167f9b32ddcb805f40fc8d478ce05f8))
* ✨ aggiorna la pagina "About" con contenuti personali e sezioni dettagliate ([42eedaa](https://github.com/Smailen5/portfolio-website/commit/42eedaad1d5b30ed454680174e25747b38a42197))
* ✨ aggiungi componente Section e aggiorna la pagina "About" per utilizzarlo ([bcec046](https://github.com/Smailen5/portfolio-website/commit/bcec046229b400da099b31ae587ad2769d88a61b))
* ✨ aggiungi componente Separator ([7c15ffb](https://github.com/Smailen5/portfolio-website/commit/7c15ffb90df66bb4f8426b71b0879d3dcdf99b7a))
* ✨ aggiungi componente Strong e aggiorna la pagina "About" per utilizzare il nuovo componente ([44bfd3a](https://github.com/Smailen5/portfolio-website/commit/44bfd3ab23d161b300cefac798a617d17777aceb))
* ✨ aggiungi componenti H1 e H2 e aggiorna la pagina "About" per utilizzarli ([0e93bf6](https://github.com/Smailen5/portfolio-website/commit/0e93bf69bb30070571743e2a7f7ddbbd40619756))
* ✨ aggiungi la pagina "About" al sitemap per migliorare la navigazione del sito ([cdd0cea](https://github.com/Smailen5/portfolio-website/commit/cdd0ceafd331beb4f0aba4a6f107cfaf5ac6f84e))
* ✨ aggiungi la route "About" al router ([eb5cc44](https://github.com/Smailen5/portfolio-website/commit/eb5cc44fb8a0bc7816e0218a184176eeeb53d367))
* ✨ aggiungi link per la pagina "About" nella costante di navigazione ([28a8117](https://github.com/Smailen5/portfolio-website/commit/28a8117826d8df2fc53a062cb1ae04ba786a2f7b))
* ✨ esporta i componenti H1 e H2 e aggiorna gli import nella pagina "About" ([f515f16](https://github.com/Smailen5/portfolio-website/commit/f515f168e9aff4a8640bae02aa3bcb2d9636056b))


### Bug Fixes

* 🐛 correggi l'URL del sito nei metadati per includere la barra finale ([2b674ed](https://github.com/Smailen5/portfolio-website/commit/2b674eddfa659c96ee28e1587754019aedc86528))
* 🐛 correggi l'uso degli apostrofi nella pagina "About" per garantire la corretta visualizzazione del testo ([b0562ba](https://github.com/Smailen5/portfolio-website/commit/b0562ba308eeb200c381defccefcf15116184aa0))
* 🐛 migliora la gestione dell'ogUrl nei metadati Open Graph ([327b60d](https://github.com/Smailen5/portfolio-website/commit/327b60d39d497892ae8b0224862e3804be3e1060))
* 🐛 rimuovi i tag Open Graph obsoleti e aggiorna i metadati per una migliore condivisione sui social ([d3f4ca3](https://github.com/Smailen5/portfolio-website/commit/d3f4ca34d16cf7b9692121f7075dc50de7f73e20))

## [5.1.0](https://github.com/Smailen5/portfolio-website/compare/v5.0.0...v5.1.0) (2025-10-17)

### Features

- 🎨 aggiorna classe del contenitore nel componente Filter ([7d42c68](https://github.com/Smailen5/portfolio-website/commit/7d42c68790bf93071aff146a574705d70d0f3a83))
- 🎨 aggiorna classe del pulsante nel componente Card ([8386c85](https://github.com/Smailen5/portfolio-website/commit/8386c85c0273321fa4e5009f9683bd21d8fa8ac9))
- 🎨 aggiorna classi CSS nel componente Hero ([61686e1](https://github.com/Smailen5/portfolio-website/commit/61686e166cf145dd13f550601889307b3a3c962d))
- 🎨 aggiorna padding nel componente Filter ([43a5f6e](https://github.com/Smailen5/portfolio-website/commit/43a5f6ef796f5ff01a9f6b41796e21d7173f1510))
- 🎨 aggiorna stili nei componenti Layout e Navbar ([29a0d79](https://github.com/Smailen5/portfolio-website/commit/29a0d791596303b638304f0a196823db2f574961))
- 🎨 aggiorna stili nei componenti SectionSkill e Latest ([2f60e64](https://github.com/Smailen5/portfolio-website/commit/2f60e64c37c2855456bec89b9fb4a297ea21d09e))
- 🎨 aggiorna stili nel componente Filter ([6933121](https://github.com/Smailen5/portfolio-website/commit/6933121338ad5977ab9540dc08f12c2581c18d88))
- 🎨 aggiunge gap alla classe card-body nel componente Card ([6eee41f](https://github.com/Smailen5/portfolio-website/commit/6eee41f98017bbf6a5ab003ddccc42de59e8662d))
- 🎨 aggiunge transizione al componente Card ([6fd1b58](https://github.com/Smailen5/portfolio-website/commit/6fd1b58ba2b3ea549966e007c3c5d932a8cc1efd))
- 🎨 aggiunge variabili tema daisyUi ([2539743](https://github.com/Smailen5/portfolio-website/commit/2539743153ba5ed9bbc285f0f2734c87204b8af7))
- 📱 aggiorna la griglia delle competenze nel componente Skills ([52b7d1f](https://github.com/Smailen5/portfolio-website/commit/52b7d1f9911f494e8bebe3ba7343daaed5d998b8))

### Bug Fixes

- 🚚 modifica esportazione del componente Presentation ([cbad9ce](https://github.com/Smailen5/portfolio-website/commit/cbad9ce261c15fb4e2518ea3cf38c132830e8ca9))

## [5.0.0](https://github.com/Smailen5/portfolio-website/compare/v4.5.0...v5.0.0) (2025-10-13)

### ⚠ BREAKING CHANGES

- Rimosso TanStack Start SSR, migrato a TanStack Router SPA

* Refactoring completo architettura a SPA
* Implementato TanStack Router file-based routing
* Sistema SEO dinamico con React Helmet
* Migrato da NextUI a DaisyUI
* Rimosso form contatto (solo email/social)
* CDN Netlify per progetti
* Commenti TSDoc completi in italiano
* README aggiornato con stack v5.0.0.

### Features

- ✨ aggiunti meta tag globali e componente Head per la gestione SEO ([555ec00](https://github.com/Smailen5/portfolio-website/commit/555ec0086219fec6cf95767f487eed6cdfb62cb5))
- ✨ aggiunto componente Head per la gestione SEO nelle route ([5747472](https://github.com/Smailen5/portfolio-website/commit/574747294393f2b9f3092a437c1f23d4d3980205))
- ✨ integrato componente Head nella root route per la gestione SEO ([e9753b1](https://github.com/Smailen5/portfolio-website/commit/e9753b1eba8463724b7f00f9590676f1e06c194a))
- ✨migrazione completa a SPA con TanStack Router ([dc32489](https://github.com/Smailen5/portfolio-website/commit/dc32489336117fde5ad22a591e40ede81c9617e5))
- 📄 aggiunti nuovi CV in formato PDF ([1f04e2d](https://github.com/Smailen5/portfolio-website/commit/1f04e2d484a9c242d224b9e526a514060d29aac6))

### Bug Fixes

- 🔧 aggiornato lo script di sviluppo in package.json per supportare l'accesso remoto ([0e48a7f](https://github.com/Smailen5/portfolio-website/commit/0e48a7f1d7c8f6226852b272047202da52893eb3))
- 🔧 corretto un errore di battitura nel componente HeaderProject ([0cd951c](https://github.com/Smailen5/portfolio-website/commit/0cd951c7f1adaabcfc8315d4dc0af48d35cdaded))

## [4.5.0](https://github.com/Smailen5/portfolio-website/compare/v4.4.0...v4.5.0) (2025-10-09)

### Features

- ✨ aggiornato il componente CardProject per utilizzare nameFolder ([550ce53](https://github.com/Smailen5/portfolio-website/commit/550ce539c8d440cdc53b186e28151bda97b8909b))
- ✨ aggiunto il campo nameFolder all'interfaccia CardProjectProps ([c604107](https://github.com/Smailen5/portfolio-website/commit/c60410731ba857e43156bdaa6e1c5837fb46892e))

### Bug Fixes

- 🐛 aggiornato l'endpoint README per il recupero delle immagini ([c209a6d](https://github.com/Smailen5/portfolio-website/commit/c209a6deeff49b3ca53203a0a25c53a280cecc84))
- 🐛 corretto l'uso dell'apostrofo nel testo della ContactPage ([7c9ce3b](https://github.com/Smailen5/portfolio-website/commit/7c9ce3b0a6baf93f40b06593132bbd85a94d770a))
- 🐛 semplificato il gestore di eventi nel componente Filter ([e8ac5d0](https://github.com/Smailen5/portfolio-website/commit/e8ac5d0ad93ac24450c941cd7322d74c23a50372))

## [4.4.0](https://github.com/Smailen5/portfolio-website/compare/v4.3.0...v4.4.0) (2025-10-09)

### Features

- ✨ aggiunto il file getProjects.ts per il fetch dei progetti ([2fc025c](https://github.com/Smailen5/portfolio-website/commit/2fc025cce80bbbe23dcf47cb3606d95c4c58f0f9))
- ✨ aggiunto il supporto per la funzione fetch nel file di configurazione ESLint ([3a28838](https://github.com/Smailen5/portfolio-website/commit/3a28838a145c15b1ecf0a9cea04d866a224d83f7))
- ✨ aggiunto supporto per Netlify nel file di configurazione e aggiornate le dipendenze ([7a98387](https://github.com/Smailen5/portfolio-website/commit/7a9838767af3ebec4d3aeb086a0ee09e894e3eac))
- ✨ implementato il ThemeContext per la gestione del tema ([80db58e](https://github.com/Smailen5/portfolio-website/commit/80db58ed9b9c991d9207cb2f1effff3b0e59283f))

### Bug Fixes

- 🐛 migliorata la gestione della SideBar con useEffect ([cdda6db](https://github.com/Smailen5/portfolio-website/commit/cdda6db904f91cda95157d6558af11365fadf3c1))
- 🐛 semplificata la logica del filtro nei componenti Filter e Section ([3df052b](https://github.com/Smailen5/portfolio-website/commit/3df052b8b3e9cf7f4c2fdab74f23e86716977b2e))
- 🗑️ rimosso il supporto per Netlify e aggiornato il file di configurazione ([4fb257b](https://github.com/Smailen5/portfolio-website/commit/4fb257b525b0784dedf99f69c858f6d9613c3bc2))

## [4.3.0](https://github.com/Smailen5/portfolio-website/compare/v4.2.0...v4.3.0) (2025-10-03)

### Features

- ✨ aggiunti i componenti Icon e SocialIcons per la visualizzazione delle icone social ([9fbb55d](https://github.com/Smailen5/portfolio-website/commit/9fbb55d47afad13e81d3a0290844b06c2f2deeff))
- ✨ aggiunto il componente Footer nel file \_\_root.tsx ([548d49b](https://github.com/Smailen5/portfolio-website/commit/548d49b922c058992a36637ca783d325781840e7))

### Bug Fixes

- 🛠️ aggiornato l'anno di copyright nel footer ([59ba1f9](https://github.com/Smailen5/portfolio-website/commit/59ba1f9c38bf3c2535bd2931ff59ffa5bb4f239c))

## [4.2.0](https://github.com/Smailen5/portfolio-website/compare/v4.1.0...v4.2.0) (2025-10-02)

### Features

- ✨ aggiornato il componente CardProject con nuove funzionalità e stili ([2373a24](https://github.com/Smailen5/portfolio-website/commit/2373a24803094c0f6ecedba7c4c830855efca369))
- ✨ aggiornato il componente Homepage con nuovi elementi ([ca28d22](https://github.com/Smailen5/portfolio-website/commit/ca28d2288cd466ab295e48bc934eef6bf69929ac))
- ✨ aggiunti hook useFetch e servizio projectService per il recupero dei progetti ([b971a63](https://github.com/Smailen5/portfolio-website/commit/b971a63af10b77bcaf33595a1c428d80123ad754))
- ✨ aggiunto componente ToggleTheme nella Navbar ([ac37f8f](https://github.com/Smailen5/portfolio-website/commit/ac37f8fab9482aef8bb5798088acd159f482dece))
- ✨ aggiunto componente ToggleTheme per la gestione del tema ([3c28fae](https://github.com/Smailen5/portfolio-website/commit/3c28fae6244653f79cc66b50ae4c75f8ec03fcce))
- ✨ aggiunto il componente Strong per evidenziare il testo ([30ed8b0](https://github.com/Smailen5/portfolio-website/commit/30ed8b02a9308a5df0ad973969055ab5da4783d9))
- ✨ aggiunto nuovo icona di chiusura multipla in formato SVG ([93430f3](https://github.com/Smailen5/portfolio-website/commit/93430f36807d0396ad434a55c567f5a8e41fe7fd))
- ✨ aggiunto pulsante di chiusura con icona SVG nella SideBar ([5329064](https://github.com/Smailen5/portfolio-website/commit/5329064d7b0156d28079465b174a00867533e020))

### Bug Fixes

- 🐛 rimosso il testo "toggle tema" dalla SideBar ([4452939](https://github.com/Smailen5/portfolio-website/commit/4452939caa2e754648a23f97dc0d03054daaa12b))

## [4.1.0](https://github.com/Smailen5/portfolio-website/compare/v4.0.0...v4.1.0) (2025-10-02)

### Features

- ✨ aggiornato il componente Navbar per supportare la navigazione desktop e mobile ([a626384](https://github.com/Smailen5/portfolio-website/commit/a626384fdfe9b7cb9f2b6f7dbd01879ff275ca4f))
- ✨ aggiornato il componente SideBar con navigazione dinamica e chiusura al click ([f6c3237](https://github.com/Smailen5/portfolio-website/commit/f6c323725295015f37cb9b25e7b77cbba0e7542b))
- ✨ aggiunta configurazione per il plugin daisyui ([471f9d6](https://github.com/Smailen5/portfolio-website/commit/471f9d60de88f1a06366cba1eac81d8b49b8dd55))
- ✨ aggiunta dipendenza da daisyui ([4b19cb1](https://github.com/Smailen5/portfolio-website/commit/4b19cb12b69798ab346bfc3084e319774071cd0c))
- ✨ aggiunta funzionalità di apertura del menu nella Navbar ([bc55c1d](https://github.com/Smailen5/portfolio-website/commit/bc55c1d8c6217deea816cc1ad3d8003598fe3ea1))
- ✨ aggiunti componenti ContactPage, ErrorPage e ProjectPage ([b6b6f99](https://github.com/Smailen5/portfolio-website/commit/b6b6f995b439322227d5798369138f59bfe224ae))
- ✨ aggiunto componente Avatar nella Navbar ([60d66bf](https://github.com/Smailen5/portfolio-website/commit/60d66bf1cddde9e22de01771e50a7e25cd265efc))
- ✨ aggiunto componente CurriculumDownload per il download del CV ([6cd22c5](https://github.com/Smailen5/portfolio-website/commit/6cd22c586384a983654893832102c8c959023fad))
- ✨ aggiunto componente DesktopNavbar per la navigazione desktop ([168c4d6](https://github.com/Smailen5/portfolio-website/commit/168c4d609599b095940edb8ea457774ace1f2b84))
- ✨ aggiunto componente NotFound per gestire le pagine non trovate ([ac10644](https://github.com/Smailen5/portfolio-website/commit/ac106443fe08c96bd5177179bdafb5bca60f7339))
- ✨ aggiunto componente SideBar per la navigazione ([6fa782a](https://github.com/Smailen5/portfolio-website/commit/6fa782aec2aa6bb5bf3340fa9de6d269a8cb2a53))
- ✨ aggiunto toggle tema nella SideBar ([6cff8dc](https://github.com/Smailen5/portfolio-website/commit/6cff8dc6157899bfa9ebfae009e1b7f2ef24c21f))
- ✨ rimosso il componente ErrorPage e le relative rotte ([2c13433](https://github.com/Smailen5/portfolio-website/commit/2c1343357b38133ae142d6e338edf2ec43920688))
- 🆕 aggiunta Navbar e importazione di app.css nel componente principale ([7b7d6df](https://github.com/Smailen5/portfolio-website/commit/7b7d6df606ebaac422089574b97274346def8dcc))
- 🆕 creata la Navbar come componente e aggiunto l'export nel modulo ([5f006d1](https://github.com/Smailen5/portfolio-website/commit/5f006d1e509c3aaedd6a8be8b439874e4c5ea220))

### Bug Fixes

- 🐛 aggiunto gestore di chiusura al click nel componente SideBar ([1116bd9](https://github.com/Smailen5/portfolio-website/commit/1116bd9ec042683f138b611e887adb44b8be52fa))
- 🐛 reso il metodo closeSideBar opzionale nel componente CurriculumDownload ([6cc8ac6](https://github.com/Smailen5/portfolio-website/commit/6cc8ac6d7fd9660fd331a3545b32678648c89c39))
- 🛠️ ripristinata la funzione HomePage e aggiornato il rendering ([9358248](https://github.com/Smailen5/portfolio-website/commit/935824847c017c1b516af85913c22ea68fca52a0))
- 🛠️ sposta il provider in \_\_root.tsx ([09961dc](https://github.com/Smailen5/portfolio-website/commit/09961dc459e924d78524074020a42e52a79436b3))

## [4.0.0](https://github.com/Smailen5/portfolio-website/compare/v3.9.2...v4.0.0) (2025-09-30)

### ⚠ BREAKING CHANGES

- rimosso react-router-dom dalle dipendenze del progetto.

### Bug Fixes

- 🛠️ aggiornato l'importazione di Link e useNavigate per utilizzare TanStack Router ([d02f464](https://github.com/Smailen5/portfolio-website/commit/d02f46420f5db7482bcedd4fd2d19f9dc16d293c))
- 🛠️ aggiunta la HomePage come componente della rotta principale ([e854c2f](https://github.com/Smailen5/portfolio-website/commit/e854c2f973b3a1b39e5d3d33be341c6de0756e8d))
- 🛠️ rimosso react-router-dom dalle dipendenze ([1b258e2](https://github.com/Smailen5/portfolio-website/commit/1b258e23b89154f1c9ee2174b460884610acb1f9))
- aggiornato l'importazione di useParams da react-router-dom a @tanstack/react-router ([7c63e61](https://github.com/Smailen5/portfolio-website/commit/7c63e6179a3c5645734ccfc2c8b49657317203e2))

### [3.9.2](https://github.com/Smailen5/portfolio-website/compare/v3.9.1...v3.9.2) (2025-09-29)

### [3.9.1](https://github.com/Smailen5/portfolio-website/compare/v3.9.0...v3.9.1) (2025-09-25)

### Bug Fixes

- 🔧 aggiornato l'endpoint per i progetti GitHub ([370bd72](https://github.com/Smailen5/portfolio-website/commit/370bd720ce7591ba84c2e5780c11d8c5bfea8bc1))

## [3.9.0](https://github.com/Smailen5/portfolio-website/compare/v3.8.0...v3.9.0) (2025-07-09)

### Features

- ✨ aggiunto effetto hover al componente ButtonSocial ([1779031](https://github.com/Smailen5/portfolio-website/commit/17790314362a5bd189f228e7d20384f4504625cc))
- ✨ aggiunto il componente SocialIcons al footer ([dd571f7](https://github.com/Smailen5/portfolio-website/commit/dd571f715a3f2f7232b5c5d14f68571cc6288f6a))
- ✨ aggiunto il componente SocialIcons per visualizzare le icone social ([f659131](https://github.com/Smailen5/portfolio-website/commit/f659131bccb89aed9103535357b3e62deb082cbb))

## [3.8.0](https://github.com/Smailen5/portfolio-website/compare/v3.7.0...v3.8.0) (2025-07-07)

### Features

- ✨ aggiunge funzione di troncamento del testo ([35c914d](https://github.com/Smailen5/portfolio-website/commit/35c914df7592c3bbb72556323aefe943e9653cad))
- ✨ aggiunta la proprietà 'nameFolder' all'interfaccia Project ([9426f47](https://github.com/Smailen5/portfolio-website/commit/9426f47fb53277913cd9827543fb42c232d66c29))
- ✨ aggiunti nuovi strumenti al file skillsData ([a394e34](https://github.com/Smailen5/portfolio-website/commit/a394e34ab727e3c5b479541ebf2981bc1a57fdd8))
- ✨ integra la funzione di troncamento nel componente Container ([6f41e46](https://github.com/Smailen5/portfolio-website/commit/6f41e4642110bba4a479ce507553d30bd23910a3))
- ✨ ordina le tecnologie nel componente ContainerProject ([266e3cd](https://github.com/Smailen5/portfolio-website/commit/266e3cd0589e5043825d32f15a44c214e487636e))

### Bug Fixes

- 💄 aggiunge overflow-hidden al contenitore del progetto nel componente Card ([dc6ff62](https://github.com/Smailen5/portfolio-website/commit/dc6ff62286d8f0e5747031465bd268c3441a2f81))
- 📝 commenta il contenitore dei pulsanti nel componente ButtonsProject ([a6e11d0](https://github.com/Smailen5/portfolio-website/commit/a6e11d0eae28518e371513bd6d039d3a2707ebbd))
- 📝 rimuove commento superfluo nel servizio progetti ([e17960d](https://github.com/Smailen5/portfolio-website/commit/e17960d5230085f4a72291b3c1db5c6c0f87a093))
- 🔧 aggiorna il percorso delle immagini nel componente MarkdownRenderer ([ebf6585](https://github.com/Smailen5/portfolio-website/commit/ebf65852436f9d78f4a475bc4d1059fae56ab02d))
- 🔧 aggiorna la proprietà 'nameProject' nel componente SingleProject ([c52a922](https://github.com/Smailen5/portfolio-website/commit/c52a92212790d020352ea5560e09ef7b996ad328))
- 🖼️ rimuove il bordo arrotondato dal contenitore dell'immagine nel componente Picture ([de76ef7](https://github.com/Smailen5/portfolio-website/commit/de76ef753e572fd5d814b24e5f263505e7fc18e3))
- 🗑️ rimosso l'icona formspree e aggiornato il file skillsData ([0647550](https://github.com/Smailen5/portfolio-website/commit/06475504a4204ed9c64d1e6b98cc2bea65113328))

## [3.7.0](https://github.com/Smailen5/portfolio-website/compare/v3.6.0...v3.7.0) (2025-06-27)

### Features

- ✨ aggiunta la proprietà 'nameFolder' all'interfaccia Project ([fb3592f](https://github.com/Smailen5/portfolio-website/commit/fb3592ffd4e5a1a50f05e15b43766579c7178744))

### Bug Fixes

- 🔧 aggiorna il percorso delle immagini nel componente MarkdownRenderer ([0e15225](https://github.com/Smailen5/portfolio-website/commit/0e1522546fec9c7d54df7587b71d2643d688df59))
- 🔧 aggiorna la proprietà 'nameProject' nel componente SingleProject ([8e78169](https://github.com/Smailen5/portfolio-website/commit/8e78169daf1d447e57f51e5d4d56cbc9bae91ff4))

## [3.6.0](https://github.com/Smailen5/portfolio-website/compare/v3.5.0...v3.6.0) (2025-06-27)

### Features

- ✨ aggiunge funzione di troncamento del testo ([666ded8](https://github.com/Smailen5/portfolio-website/commit/666ded8755f750d3a7ce7255e487f46c183f073d))
- ✨ integra la funzione di troncamento nel componente Container ([8c7f2f7](https://github.com/Smailen5/portfolio-website/commit/8c7f2f76e44ea8a4de8ea6f7fd51ee2c596a6d89))
- ✨ ordina le tecnologie nel componente ContainerProject ([012ab98](https://github.com/Smailen5/portfolio-website/commit/012ab987763eb1178a6aedaf7dd271b573672514))

### Bug Fixes

- 📝 commenta il contenitore dei pulsanti nel componente ButtonsProject ([b972e02](https://github.com/Smailen5/portfolio-website/commit/b972e02564749b6ff029b929eb45e4188a3f87ee))

## [3.5.0](https://github.com/Smailen5/portfolio-website/compare/v3.4.0...v3.5.0) (2025-06-27)

### Features

- ✨ aggiunge un template per la segnalazione di bug ([ad4912d](https://github.com/Smailen5/portfolio-website/commit/ad4912d29a42700cca70791dca626f274db7dc7b))
- ✨ aggiunge un template per la segnalazione di bug ([703b7c2](https://github.com/Smailen5/portfolio-website/commit/703b7c26714d8bbcb0d94facfa0477fd434ef217))
- ✨ aggiunge un template per le pull request ([dcf7c42](https://github.com/Smailen5/portfolio-website/commit/dcf7c421cc4b2443260494e4ce7ad1b9b716794a))
- ✨ aggiunge un template per le pull request ([1edfd84](https://github.com/Smailen5/portfolio-website/commit/1edfd84a4134044a284a7b8b5fbf87ff1f554f9c))

### Bug Fixes

- 💄 aggiunge overflow-hidden al contenitore del progetto nel componente Card ([4b1f0fb](https://github.com/Smailen5/portfolio-website/commit/4b1f0fbbb58db8b11588af5fbc3cac52bd92e04f))
- 📝 rimuove commento superfluo nel servizio progetti ([3d218ec](https://github.com/Smailen5/portfolio-website/commit/3d218ecd46232e77b948a2ec23d80d0838da49e6))
- 🖼️ rimuove il bordo arrotondato dal contenitore dell'immagine nel componente Picture ([86c1da5](https://github.com/Smailen5/portfolio-website/commit/86c1da55b3c9520292a2435841922c6b17bb8ea1))

## [3.4.0](https://github.com/Smailen5/portfolio-website/compare/v3.3.1...v3.4.0) (2025-06-26)

### Features

- ✨ aggiunge il componente LinkBlank nel progetto Picture ([f2af07a](https://github.com/Smailen5/portfolio-website/commit/f2af07a484bef87ab94e9a87b31668c4da7d957d))
- ✨ aggiunge la proprietà readmeContent all'interfaccia Project ([2b16a4d](https://github.com/Smailen5/portfolio-website/commit/2b16a4d2120dbe45d07db9b42a3cb39a3d40a521))

### [3.3.1](https://github.com/Smailen5/portfolio-website/compare/v3.3.0...v3.3.1) (2025-06-26)

### Bug Fixes

- 🐛 gestisci gli errori nel recupero del README nel componente MarkdownRenderer ([6d5df1f](https://github.com/Smailen5/portfolio-website/commit/6d5df1f5e2fd4182ccd578e513673c91f1b01bb0))
- 🐛 gestisci la visualizzazione della descrizione nel componente ContainerProject ([d2bdb02](https://github.com/Smailen5/portfolio-website/commit/d2bdb026f9c01ea908a8406ec857a28f7c6033e1))
- 🐛 gestisci la visualizzazione delle tecnologie nel componente ContainerProject ([295ba54](https://github.com/Smailen5/portfolio-website/commit/295ba54eb693f671bda8121ae4db303ee2519339))

## [3.3.0](https://github.com/Smailen5/portfolio-website/compare/v3.2.0...v3.3.0) (2025-06-26)

### Features

- ✨ aggiungi l'hook useFetchReadme per il recupero del contenuto README ([7f72177](https://github.com/Smailen5/portfolio-website/commit/7f7217711ab849ebbe706bc260874a58c6433b15))
- ✨ integra l'hook useFetchReadme nel componente MarkdownRenderer ([6c45de6](https://github.com/Smailen5/portfolio-website/commit/6c45de600f2211bff3932a18e40b513d96edcf14))

## [3.2.0](https://github.com/Smailen5/portfolio-website/compare/v3.1.0...v3.2.0) (2025-06-26)

### Features

- ✨ aggiungi il campo descrizione al componente ContainerProject ([dd3132a](https://github.com/Smailen5/portfolio-website/commit/dd3132af4d9fc474cc9ca6b94dbc3ae09ac9279b))

## [3.1.0](https://github.com/Smailen5/portfolio-website/compare/v3.0.0...v3.1.0) (2025-06-25)

### Features

- ✨ migliora la gestione dei progetti nella cache ([43be7a7](https://github.com/Smailen5/portfolio-website/commit/43be7a7da6443b475254e6c0c0ef7abc1e1c408a))
- 🏷️ aggiungi il tipo CachedProjects per la gestione della cache dei progetti ([60529f4](https://github.com/Smailen5/portfolio-website/commit/60529f4d63835c22d46537537eaf34b1383bab48))
- 🏷️ aggiungi il tipo Project per la gestione dei progetti ([ca3ea17](https://github.com/Smailen5/portfolio-website/commit/ca3ea17f5fbb8a1e0080bbc5f5643aac1e99d936))

## [3.0.0](https://github.com/Smailen5/portfolio-website/compare/v2.2.1...v3.0.0) (2025-06-25)

### ⚠ BREAKING CHANGES

- Il metodo getAll ora usa un nuovo endpoint JSON; la vecchia API non è più supportata.

* aggiornato il metodo `getAll` per ottenere i progetti da un nuovo endpoint JSON, migliorando la gestione dei dati.
* rimosse le logiche di recupero del `package.json` e degli screenshot, semplificando il flusso di dati e migliorando la leggibilità del codice.

### Features

- ✨ aggiunge configurazione per le funzioni Netlify ([d8d8786](https://github.com/Smailen5/portfolio-website/commit/d8d87866a69dea2d3100e2b77c72e815c0462624))
- ✨ aggiunge supporto CORS e migliora la gestione degli errori nella funzione get-projects ([470ccd9](https://github.com/Smailen5/portfolio-website/commit/470ccd98344d7c5c5c1f606e6439d43bf3e10886))
- 🎉 aggiorna gli endpoint API per utilizzare le variabili ambientali ([e40dfcc](https://github.com/Smailen5/portfolio-website/commit/e40dfccb0b434a5db58eae941c60b0b0f73eda48))
- 🎉 aggiorna i tipi Project e PackageJson per una maggiore flessibilità ([8d8cbdf](https://github.com/Smailen5/portfolio-website/commit/8d8cbdf370588f1c984206329ca94c221f3eed78))
- 🎉 aggiungi il file di configurazione ambientale per l'applicazione ([f70a211](https://github.com/Smailen5/portfolio-website/commit/f70a2119accf59d1d037dea84fe1d93f86c4c18d))
- 🎉 aggiungi nuovi endpoint API per l'integrazione con GitHub ([538b1b3](https://github.com/Smailen5/portfolio-website/commit/538b1b3134f5f001baf98962d155a174876a8cba))
- 🎉 implementa il recupero dei progetti dalla monorepo con dettagli aggiuntivi ([5d213b7](https://github.com/Smailen5/portfolio-website/commit/5d213b7aa3e5dd43cce1b863b6bf1e0e293fcea5))

### Bug Fixes

- 🐛 aggiorna l'URL base dell'API per l'ambiente di produzione ([85ded7d](https://github.com/Smailen5/portfolio-website/commit/85ded7da4cf9ae8976a8b72128c6f7357886cda1))
- 🐛 aggiorna la logica per l'URL base dell'API ([eab7f4e](https://github.com/Smailen5/portfolio-website/commit/eab7f4e34bea0c1a66af13553ced00a23ce476c8))

- 👽 semplifica il metodo getAll per il recupero dei progetti ([8eb4a4a](https://github.com/Smailen5/portfolio-website/commit/8eb4a4af13e53e86b6db298e9a215d9171666a41))

### [2.2.1](https://github.com/Smailen5/portfolio-website/compare/v2.2.0...v2.2.1) (2025-06-24)

### Bug Fixes

- 🐛 aggiorna i percorsi di importazione per il componente Button ([ccb0f46](https://github.com/Smailen5/portfolio-website/commit/ccb0f46d87b015e119f120c7ccc5207b6051d73c))
- 🐛 aggiorna l'URL base per l'API in base all'ambiente ([93388b2](https://github.com/Smailen5/portfolio-website/commit/93388b238a7990476e366fde4340affce7eb1b8d))
- 🐛 uniforma i percorsi di importazione nel componente ErrorPage ([9e04048](https://github.com/Smailen5/portfolio-website/commit/9e040482518dc805c5229dd8d180cae6c7a17190))
- rename button.tsx to Button.tsx for case-sensitive deploy ([5f66d77](https://github.com/Smailen5/portfolio-website/commit/5f66d77c2f7acac3070a3b1d9a4f2385efba7269))

## [2.2.0](https://github.com/Smailen5/portfolio-website/compare/v2.1.0...v2.2.0) (2025-06-24)

### Features

- ✨ aggiunge il custom hook useGlobalContext ([238f7a6](https://github.com/Smailen5/portfolio-website/commit/238f7a61eeb77d68a48c6b4f6e95319cc6ad8d4c))
- ✨ aggiunge il custom hook useTheme ([5275e83](https://github.com/Smailen5/portfolio-website/commit/5275e83ecdb23fbb2bf33a6cb9f864c4dd4a42fe))

### Bug Fixes

- 🐛 aggiorna i percorsi di importazione per i custom hooks e le utility ([6999af9](https://github.com/Smailen5/portfolio-website/commit/6999af91458b36044fadde13ed7e3df0a192017d))
- 🐛 aggiorna l'importazione del hook useTheme ([6e66da2](https://github.com/Smailen5/portfolio-website/commit/6e66da2d8d299359c3bd4726b18b3a36d14ad01b))
- 🐛 aggiunge commento per disabilitare l'errore ESLint nel custom hook useGetProjects ([f79e3cc](https://github.com/Smailen5/portfolio-website/commit/f79e3cc88b613b2195248171796fc5b303e8068b))
- 🐛 aggiunge punto e virgola mancante nel custom hook useFetch ([f56f032](https://github.com/Smailen5/portfolio-website/commit/f56f03275f36006be966ca53c2208db10370ebdb))
- 🐛 corregge il percorso di importazione del ThemeProvider ([1e4bb89](https://github.com/Smailen5/portfolio-website/commit/1e4bb895af9cfa6b2463a0daa0742b8fcd3fb07c))
- 🐛 corregge il percorso di importazione del ThemeProvider in main.tsx ([9b837e1](https://github.com/Smailen5/portfolio-website/commit/9b837e164939b458604c50a6379a762236f54eae))
- 🐛 corregge il percorso di importazione del ThemeProvider nel hook useTheme ([e41e18d](https://github.com/Smailen5/portfolio-website/commit/e41e18d664cb4033ee3b5c84ab59c4141fa59ef7))
- 🐛 corregge l'uso delle entità HTML nel componente Header ([9e398ae](https://github.com/Smailen5/portfolio-website/commit/9e398aeb335c70347b7fb116cb893a9e735aa89c))
- 🐛 corregge l'uso delle entità HTML nel componente Hero ([369d7de](https://github.com/Smailen5/portfolio-website/commit/369d7de966d94608b712ec5dda8cf56f3cbefccf))
- 🐛 corregge l'uso delle entità HTML nel componente Presentation ([cb0b69b](https://github.com/Smailen5/portfolio-website/commit/cb0b69bb07eb0c5e8ec1eed1781562f7bfa5a803))
- 🐛 disabilita l'errore ESLint per variabili non utilizzate nel custom hook useFetch ([fc83630](https://github.com/Smailen5/portfolio-website/commit/fc836300fbc9276a65e0b3fbe77095a08488838b))
- 🐛 rinomina Components in components per consistenza ([0d31e23](https://github.com/Smailen5/portfolio-website/commit/0d31e2340a7bb566176f1cde171d01809fab3f18))
- 🔧 aggiorna il percorso di importazione del componente Layout ([22bd03d](https://github.com/Smailen5/portfolio-website/commit/22bd03d6c4b51c59b0da24608e4b2f540f7e51e4))

## [2.1.0](https://github.com/Smailen5/portfolio-website/compare/v2.0.0...v2.1.0) (2025-06-24)

### Features

- ✨ aggiorna le opzioni del filtro nella componente FilterSelect ([6710362](https://github.com/Smailen5/portfolio-website/commit/6710362473df78eca900cbdc9a689d197dd73d6f))
- ✨ aggiorna le opzioni del filtro nella componente FilterSelect ([9867dbb](https://github.com/Smailen5/portfolio-website/commit/9867dbb72d06e6321ded0ef8d674bc0e3362a4f5))
- ✨ aggiunge gestione degli errori nel hook useFetch ([15cd805](https://github.com/Smailen5/portfolio-website/commit/15cd8059d0cd9aea11f9e1a8002f5235b69f7dcb))
- ✨ aggiunge gestione degli errori nel hook useFilter ([d23e7df](https://github.com/Smailen5/portfolio-website/commit/d23e7df09dc7f67d7f4fcae9cd2f66553036aff8))
- ✨ aggiunge gestione degli errori nella componente LastProjects ([880a54e](https://github.com/Smailen5/portfolio-website/commit/880a54e0af0e31a8def5e3bc2640863918941e91))
- ✨ aggiunge visualizzazione degli errori nella sezione progetti ([5f5137c](https://github.com/Smailen5/portfolio-website/commit/5f5137c8eeab0321d2844a929ef347fea8a25553))
- 🎉 aggiunge il file DEV-SCRIPT.md per il deploy e il test in locale ([d47f008](https://github.com/Smailen5/portfolio-website/commit/d47f00884e7b14f1feb842f4945f58367293f542))

### Bug Fixes

- 🐛 semplifica la logica di controllo della variabile shouldFetch nel hook useFetch ([d8fa16b](https://github.com/Smailen5/portfolio-website/commit/d8fa16b0f84fbe66a03014aaa32700526d1234d9))
- 🔧 gestisce il caricamento durante il recupero dei progetti ([600b106](https://github.com/Smailen5/portfolio-website/commit/600b10653f620ddc586a803551e31e3145410950))
- 🔧 migliora la gestione del caricamento durante il recupero dei progetti ([32f2fd8](https://github.com/Smailen5/portfolio-website/commit/32f2fd8aff7374757c3c63f6a43d37d41ebfe255))
- 🔧 migliora la visualizzazione dei progetti nella sezione ([c208265](https://github.com/Smailen5/portfolio-website/commit/c2082658f65095913ed84720708b19d5ad45e744))

## [2.0.0](https://github.com/Smailen5/portfolio-website/compare/v1.4.0...v2.0.0) (2025-06-23)

### ⚠ BREAKING CHANGES

- 🎉 aggiunge la funzione Netlify per recuperare i progetti

### Features

- 🎉 aggiunge il file package.json per la funzione Netlify "hello-world" ([e2bf07c](https://github.com/Smailen5/portfolio-website/commit/e2bf07c16b0044e13b0df852ad096fbf97fc7830))
- 🎉 aggiunge il file test-db.js per la gestione dei progetti con MongoDB ([306fba7](https://github.com/Smailen5/portfolio-website/commit/306fba7245ddf1b9f7180ecb826a975933c8f61a))
- 🎉 aggiunge la funzione Netlify per recuperare i progetti ([0e9f347](https://github.com/Smailen5/portfolio-website/commit/0e9f3479d8c141f6e13501b42fdc1f92b9cd3779))
- 📦 aggiunge il file package-lock.json per la funzione Netlify "hello-world" ([bfa229c](https://github.com/Smailen5/portfolio-website/commit/bfa229c09e579c980b54a2d7de88df7b97e0c271))

### Bug Fixes

- 🔧 aggiorna l'endpoint GET_ALL per i progetti ([ec742b7](https://github.com/Smailen5/portfolio-website/commit/ec742b75352d3f4c60cfb37ae54d942d317330cf))

## [1.4.0](https://github.com/Smailen5/portfolio-website/compare/v1.3.2...v1.4.0) (2025-05-28)

### Features

- 🎉 aggiorna il tipo Project per includere il campo readme ([17c0174](https://github.com/Smailen5/portfolio-website/commit/17c0174337a9674d8d2b9a84a27b4b4d0a9a6b8e))
- 🎉 aggiungi costanti API per la gestione degli endpoint ([53968f2](https://github.com/Smailen5/portfolio-website/commit/53968f2859356c84d8f1b42960c2b1e62ebd8936))
- 🎉 aggiungi gestione dei progetti nel contesto globale ([7f082fa](https://github.com/Smailen5/portfolio-website/commit/7f082facfc215ad598b910c8b44fac40ac42d0f7))
- 🎉 aggiungi hook useFetch per il recupero dei progetti ([aea4556](https://github.com/Smailen5/portfolio-website/commit/aea45569d533ed2ec6834522bbb711c3d990301f))
- 🎉 aggiungi il servizio per la gestione dei progetti ([8afe14e](https://github.com/Smailen5/portfolio-website/commit/8afe14e95cc76368707396e9dc5450d15c358308))
- 🎉 aggiungi interfaccia Project per la gestione dei progetti ([12d1ed3](https://github.com/Smailen5/portfolio-website/commit/12d1ed3481620fad72a069ac93e8536dcc01048f))
- 🎉 aggiungi l'hook useGetProjects per il recupero dei progetti dalla cache ([f661ec7](https://github.com/Smailen5/portfolio-website/commit/f661ec75c96f7277d9017b46090729220e40a7e4))
- 🎉 integra l'hook useGetProjects nel componente LastProjects ([56610dd](https://github.com/Smailen5/portfolio-website/commit/56610ddcebd04bd6121bf6424aa2f959788ad421))
- 🎉 integra la logica di recupero dei progetti nel componente SingleProject ([e1e3c47](https://github.com/Smailen5/portfolio-website/commit/e1e3c47aa773760dbb3a83b9749fcee6951b5dd1))
- 🎉 migliora l'hook useFetch per il recupero dei progetti ([48e0df5](https://github.com/Smailen5/portfolio-website/commit/48e0df5341a242cbf82d080e613cf88f9f079e65))
- 🎉 migliora la gestione della cache nell'hook useFetch ([0cf382d](https://github.com/Smailen5/portfolio-website/commit/0cf382dd1c5504bc2a1f770c5482f02aadd2da28))

### Bug Fixes

- 🐛 correggi l'importazione dell'hook useFetch nel componente Latest ([4d34cdb](https://github.com/Smailen5/portfolio-website/commit/4d34cdbb3b4f4c8b206f94b24eb065deb0546276))

### [1.3.2](https://github.com/Smailen5/portfolio-website/compare/v1.3.1...v1.3.2) (2025-05-27)

### Bug Fixes

- 🩹 aggiorna l'importazione dei componenti Footer e Navbar ([126c7a9](https://github.com/Smailen5/portfolio-website/commit/126c7a9929bcdc12ee9d076ec2321fc70f12f9c1))
- 🩹 aggiorna l'importazione dei componenti HomeTemplate e Layout ([f25f82e](https://github.com/Smailen5/portfolio-website/commit/f25f82e40746fd2c368169a74c35142da707c8d3))
- 🩹 aggiorna l'importazione dei componenti Layout e ProjectTemplate ([2e42162](https://github.com/Smailen5/portfolio-website/commit/2e421628b493f7d0fa528fdf321fdd306ed06793))
- 🩹 aggiorna l'importazione del componente Button nel CurriculumDownload ([4a60596](https://github.com/Smailen5/portfolio-website/commit/4a6059633df9c2eb499013bb22f6153e3a85ee1f))
- 🩹 aggiorna l'importazione del componente Button nel ModeToggle ([228d44c](https://github.com/Smailen5/portfolio-website/commit/228d44ccdde1bd2aac46f08a56dd11d4ee5cf797))
- 🩹 aggiorna l'importazione del componente Button nel SidebarMenu ([9f9e654](https://github.com/Smailen5/portfolio-website/commit/9f9e654088a7d5d20488872d272d711237e690a0))
- 🩹 aggiorna l'importazione del componente ContactTemplate ([5b656ab](https://github.com/Smailen5/portfolio-website/commit/5b656ab8ffe1afcbdcc8b4b1ef9ea8ff7cbc0cd4))
- 🩹 aggiorna l'importazione del componente Hero ([d3c204c](https://github.com/Smailen5/portfolio-website/commit/d3c204c8a53c1b3abcb925338b9c59630c33a832))
- 🩹 aggiorna l'importazione del componente SingleProject ([076bb15](https://github.com/Smailen5/portfolio-website/commit/076bb15e8a035a6ab894623ee15de61e0d32bb11))
- 🩹 aggiorna le importazioni dei componenti per riflettere la nuova struttura ([eba3eb0](https://github.com/Smailen5/portfolio-website/commit/eba3eb0c804ea8a4604eff81df539d2d093656f2))
- 🩹 corregge l'importazione del componente Button nel ButtonAction ([ba067a6](https://github.com/Smailen5/portfolio-website/commit/ba067a6e38d7813b2d62f9d756938ff5a57c8938))
- aggiunge la classe "object-contain" all'immagine nel componente MarkdownRenderer per migliorare la visualizzazione ([1c73bea](https://github.com/Smailen5/portfolio-website/commit/1c73bea8afcad7bfd98085ed7535f4d15dad0b78))

### [1.3.1](https://github.com/Smailen5/portfolio-website/compare/v1.3.0...v1.3.1) (2025-05-12)

### Bug Fixes

- aggiorna gli URL nei componenti MarkdownRenderer, extractTechnologies e useFetchReadme per puntare correttamente alla cartella "packages" ([cce9ae7](https://github.com/Smailen5/portfolio-website/commit/cce9ae77d4ea21283038a35cd6d82b5c591b3307))
- aggiorna l'anno di copyright nel README.md da 2024 a 2024 - 2025 ([a4f196b](https://github.com/Smailen5/portfolio-website/commit/a4f196b986e4f1173625556eafa95b3815d873f1))
- aggiorna l'URL nel hook useFetch per puntare alla cartella "packages" e recuperare correttamente i commit dei progetti ([61e98c9](https://github.com/Smailen5/portfolio-website/commit/61e98c92a431866c674224cc318a9f3b71ebcedc))
- migliora il filtro di useFetch per escludere correttamente la cartella "screen-capture" e aggiunge un log per l'URL delle immagini ([5c6d50a](https://github.com/Smailen5/portfolio-website/commit/5c6d50a27a2b4c062c0de7b4902aff68ab056bd9))

## [1.3.0](https://github.com/Smailen5/portfolio-website/compare/v1.2.0...v1.3.0) (2025-01-14)

### Features

- aggiorna la configurazione di Vite per ottimizzare la build e migliorare le performance ([dea66f6](https://github.com/Smailen5/portfolio-website/commit/dea66f6d34105b61ac4097dda19b4f5f36620974))

### Bug Fixes

- aggiorna il filtro di useFetch per escludere correttamente la cartella "screen-capture" oltre a "screen capture" nel recupero dei progetti ([d934e7e](https://github.com/Smailen5/portfolio-website/commit/d934e7e9296765a0ebf81fdc3355ff89c108968f))
- corregge il nome della cartella "screen-capture" in "screen capture" nel filtro di useFetch per garantire il corretto recupero dei progetti ([2094d06](https://github.com/Smailen5/portfolio-website/commit/2094d06307486ddee2890940bfad08ea3f129afb))

## [1.2.0](https://github.com/Smailen5/portfolio-website/compare/v1.1.0...v1.2.0) (2024-12-31)

### Features

- aggiorna CurriculumDownload e SidebarMenu per migliorare l'usabilità e la coerenza stilistica ([3e5ba0d](https://github.com/Smailen5/portfolio-website/commit/3e5ba0da2554babdee9f3d90b7d928a5acc01b52))
- aggiorna i componenti Avatar, MarkdownRenderer, SelectFilter e Skill per migliorare la coerenza e la documentazione ([1325877](https://github.com/Smailen5/portfolio-website/commit/1325877c75193036eefac1e2b6c3bd9c38c73827))
- aggiorna il componente CurriculumDownload per migliorare la coerenza stilistica e l'usabilità ([c1c8323](https://github.com/Smailen5/portfolio-website/commit/c1c8323e7d68b48abb12113be0f057a55cd9fa93))
- aggiorna il componente DropdownNavbar e la Navbar per migliorare l'interazione utente ([f2f9bce](https://github.com/Smailen5/portfolio-website/commit/f2f9bce68e4e602601c084a3fcd150251b47797d))
- aggiorna la Navbar per migliorare la reattività e la coerenza stilistica ([a5487e2](https://github.com/Smailen5/portfolio-website/commit/a5487e2a16bb6500fa271e70e88462a01a9d67ee))
- aggiorna LinkNavbar e SidebarMenu per migliorare l'usabilità e la coerenza stilistica ([9a8c480](https://github.com/Smailen5/portfolio-website/commit/9a8c480f0138d75078a14cea5f5491b1e4e43b80))
- aggiorna SidebarMenu e Navbar per migliorare l'usabilità e l'accessibilità ([38f4ebe](https://github.com/Smailen5/portfolio-website/commit/38f4ebe19fabac52071fc40bda109cffd1e209df))
- migliora la documentazione e la coerenza stilistica dei componenti HeroContact, Section e TooltipCustom ([d8e330b](https://github.com/Smailen5/portfolio-website/commit/d8e330ba226e762d951c3d23884b80e7d372d304))
- rimuove il componente DropdownNavbar e semplifica il SidebarMenu ([a5cde84](https://github.com/Smailen5/portfolio-website/commit/a5cde84ab5a3ec46c1c7096a3aa2cb8b526043b6))

## [1.1.0](https://github.com/Smailen5/portfolio-website/compare/v1.0.0...v1.1.0) (2024-12-04)

### Features

- aggiorna il README.md con nuove sezioni e miglioramenti visivi ([7b5e263](https://github.com/Smailen5/portfolio-website/commit/7b5e26335447688cba4b126214103fc793cdb239))
- aggiunge nuove sezioni al README.md per migliorare la documentazione del portfolio ([ba5e8df](https://github.com/Smailen5/portfolio-website/commit/ba5e8df6cec38c67c90fe5124c5efb724bdee577))
- migliora il componente Avatar e aggiorna la navbar ([e60854a](https://github.com/Smailen5/portfolio-website/commit/e60854ae6235f86cf839c75e3248250570b07233))

## [1.0.0](https://github.com/Smailen5/portfolio-website/compare/v0.0.2...v1.0.0) (2024-12-04)

### [0.0.2](https://github.com/Smailen5/portfolio-website/compare/v0.0.1...v0.0.2) (2024-12-04)

### Features

- :sparkles: migliora la navbar con contenuto responsivo e nuovi componenti ([1ef2346](https://github.com/Smailen5/portfolio-website/commit/1ef2346213b06f62da0bf1de59dce22026bd47cc))

### Bug Fixes

- rimuove codice non necessario dalla navbar ([ef6ebf5](https://github.com/Smailen5/portfolio-website/commit/ef6ebf50b510b5cdec261bdbdb59b2f42a1c50aa))

### 0.0.1 (2024-12-04)

### Features

- :alien: aggiungi API ([f4e1e65](https://github.com/Smailen5/portfolio-website/commit/f4e1e6503db8646552cb8ebf0a5edbb8fe4fa93d))
- :art: aggiungi icone ([19cc431](https://github.com/Smailen5/portfolio-website/commit/19cc431fb026796cbb5c11a7ce3033cc148b5660))
- :label: aggiorna tipi ([e1b3d85](https://github.com/Smailen5/portfolio-website/commit/e1b3d850b39b2892cbfecae0cb00438cfe29a3c7))
- :lipstick: aggiungi componente ([3ac11db](https://github.com/Smailen5/portfolio-website/commit/3ac11db538fcc7ee47026698c596a92fd81226d4))
- :lipstick: crea componente ([9d09e79](https://github.com/Smailen5/portfolio-website/commit/9d09e79a9395317b17d40bcb8b0ec4d32282d75e))
- :lipstick: crea layout pagina ([7f790a1](https://github.com/Smailen5/portfolio-website/commit/7f790a14ba7434f8f4dbcf2005f35a48ef1c99bf))
- :sparkles: aggiunge nuova sezione in home ([0930f1c](https://github.com/Smailen5/portfolio-website/commit/0930f1c00e5273f70c4d10b599d41d14351a057c))
- :sparkles: aggiungi parametro ([05ffcb6](https://github.com/Smailen5/portfolio-website/commit/05ffcb60e31c3c67ad7bcbbd0cc5eea343acaa20))
- :sparkles: componenti dinamici ([7c9c5c3](https://github.com/Smailen5/portfolio-website/commit/7c9c5c3a22010c114d3df3ba582841bce1100fd7))
- :sparkles: crea contesto darkmode ([28223e3](https://github.com/Smailen5/portfolio-website/commit/28223e31ec52d3ac3b6532194841b69a58441e6e))
- :sparkles: crea funzione per estrarre iniziali nome ([7be40e1](https://github.com/Smailen5/portfolio-website/commit/7be40e1a449a2f7d327077994241edd10df2eb4b))
- :sparkles: crea routes ([b11ff74](https://github.com/Smailen5/portfolio-website/commit/b11ff745c29851ed7b5bbfdde67827ee14351d42))
- :sparkles: download CV ([5770b42](https://github.com/Smailen5/portfolio-website/commit/5770b4206e1b020b9a99af24322ae33abe89206c))
- :sparkles: fetch readme ([509fa43](https://github.com/Smailen5/portfolio-website/commit/509fa43ff98c9f69f3fb3cd6fc39ad6e79897a59))
- :sparkles: funzione recupera tecnologie ([9259fd6](https://github.com/Smailen5/portfolio-website/commit/9259fd6049b0196871642f3926f3b0434873fe0d))
- :sparkles: hook personalizzato ([14deac9](https://github.com/Smailen5/portfolio-website/commit/14deac9217a8a82efd5a063347ca24f6aa2551c1))
- :sparkles: modifica titolo ([061e2ac](https://github.com/Smailen5/portfolio-website/commit/061e2ac291f3a69d305290c801a79e3a486eee2a))
- :sparkles: recupera data progetti ([4d07060](https://github.com/Smailen5/portfolio-website/commit/4d07060ea7652bb1d9dbd84f62ff86768066d012))
- :sparkles: recupera tecnologie ([e484679](https://github.com/Smailen5/portfolio-website/commit/e48467941d17fb7628d8586fec9789c465d85e91))
- :triangular_flag_on_post: aggiunge download curriculum multilingua ([415ae0a](https://github.com/Smailen5/portfolio-website/commit/415ae0a65520a46572cc281277a9d4504fe1be31))
- :triangular_flag_on_post: aggiunge download cv multilingua in modalita laptop o superiore ([bd95db4](https://github.com/Smailen5/portfolio-website/commit/bd95db4ca50ed8a91200b97a7974fc5f29a9257d))
- :triangular_flag_on_post: mostra file ([49f7d8a](https://github.com/Smailen5/portfolio-website/commit/49f7d8af193dc502150e09cafe152832b9df07f7))
- :triangular_flag_on_post: sposta useScroll ([772ba9f](https://github.com/Smailen5/portfolio-website/commit/772ba9f3a464292721583b5aa8a610f88ac1fb37))
- :triangular_flag_on_post: utilizza ReactMarkdown ([b0cb939](https://github.com/Smailen5/portfolio-website/commit/b0cb9392b73d3c43d678027fcecd1fec57d77e25))
- :truck: aggiungi route ([ee56912](https://github.com/Smailen5/portfolio-website/commit/ee569123b064e0d7878c180351bd2723178ebd73))

### Bug Fixes

- :adhesive_bandage: corregge classe dinamica grandezza avatar ([6b47ddd](https://github.com/Smailen5/portfolio-website/commit/6b47ddddf2cfa6a77b2c85f049122aa64d025bc0))
- :adhesive_bandage: correggi chiave ([3f47384](https://github.com/Smailen5/portfolio-website/commit/3f47384741cb72509c0a17c7512337726d675f77))
- :adhesive_bandage: correggi troppi spazi ([a43038d](https://github.com/Smailen5/portfolio-website/commit/a43038d678cd1c7499eca533806a8b7cae50356b))
- :adhesive_bandage: dimensione avatar ([9f9812f](https://github.com/Smailen5/portfolio-website/commit/9f9812ffdbdbc667cd5a10234c6cc31ec4823083))
- :adhesive_bandage: elimina ridondanza darkMode ([89ee81a](https://github.com/Smailen5/portfolio-website/commit/89ee81a988867505f6640d4c802063d618c1f1ba))
- :adhesive_bandage: escludi cartelle ([b2ad064](https://github.com/Smailen5/portfolio-website/commit/b2ad06442d7a35d7d8b0acc49091aa727d2040b9))
- :adhesive_bandage: verifica il contesto ([a1c6552](https://github.com/Smailen5/portfolio-website/commit/a1c65528af350869bb208a360ffe6fdc6a96772a))
- :adhesive_bandage: verifica immagine ([83804bd](https://github.com/Smailen5/portfolio-website/commit/83804bdce1bfa6ef547c861fd5614a35674968ac))
- :adhesive_bandage: visualizza testo alternativo ([20b09b4](https://github.com/Smailen5/portfolio-website/commit/20b09b48092e0834fecedecba439af1b0f0cc6d2))
- :adhesive_bandage: warning typescript ([d100d95](https://github.com/Smailen5/portfolio-website/commit/d100d95c9e2eb816c094b29105a6594c7e18da09))
- :alien: correggi link immagini ([7261d30](https://github.com/Smailen5/portfolio-website/commit/7261d30b51a65a322f27ad826ef3762390cc8a7a))
- :art: cambia importazione ([5f089c1](https://github.com/Smailen5/portfolio-website/commit/5f089c14860dffd0b02c23ae28cfd0e974f8815f))
- :art: fix link button ([994d402](https://github.com/Smailen5/portfolio-website/commit/994d4023e3f37d60ed42e0ba94547f7d0afaab90))
- :art: importa route ([6164704](https://github.com/Smailen5/portfolio-website/commit/616470419c39d903f6350899e8876318bdf932c3))
- :bug: aggiunge funzione ([ceca1df](https://github.com/Smailen5/portfolio-website/commit/ceca1dfc550dcee77aab9178dbd3707046755d78))
- :bug: corregge componente ([70d4ebe](https://github.com/Smailen5/portfolio-website/commit/70d4ebe3443668a30fdd614d4fc9636d831617b2))
- :bug: corregge dipendenza ([97fc34b](https://github.com/Smailen5/portfolio-website/commit/97fc34b5954a0f4843c6ed143c17268d7137045c))
- :bug: corregge percorso ([db9022e](https://github.com/Smailen5/portfolio-website/commit/db9022ee887b5f686d8420f141b767c7ffbd3a84))
- :bug: correggi salvataggio cache ([0aaae29](https://github.com/Smailen5/portfolio-website/commit/0aaae295656168f4a788797d5487030df8850f01))
- :fire: rimuovi attributo ([f874947](https://github.com/Smailen5/portfolio-website/commit/f874947d5d681a2cda4bbe2be4333214ef81ddd5))
- :green_heart: aggiungi tipi ([3c7c2b4](https://github.com/Smailen5/portfolio-website/commit/3c7c2b4a9ba48e72c4bec1b69f7d331b9a1ceba3))
- :green_heart: correggi vulnerabilita ([56a75f3](https://github.com/Smailen5/portfolio-website/commit/56a75f3d60e9e5cd50be0fce805174ad7d760bc1))
- :label: aggiorna contesto ([0601cad](https://github.com/Smailen5/portfolio-website/commit/0601cad8092af2bd24a82ecedc2ba2c12a7712ce))
- :lipstick: aggiunge dimensioni minime ([de55683](https://github.com/Smailen5/portfolio-website/commit/de55683fff785747f94cbd1c3b003eac685b1043))
- :lipstick: corregge opacita ([b3016fc](https://github.com/Smailen5/portfolio-website/commit/b3016fcc2a74b1ea56f8fd54b465e4967ccb359e))
- :lipstick: hover cambia dimensioni ([8ea02cd](https://github.com/Smailen5/portfolio-website/commit/8ea02cd01280c68c4a982fa988bedf150e38b7a2))
- :lipstick: layout singoli progetti ([a4023a5](https://github.com/Smailen5/portfolio-website/commit/a4023a5a81871e04867769d459162dc6eddde481))
- :lipstick: layout tablet ([c1ab58f](https://github.com/Smailen5/portfolio-website/commit/c1ab58f7d8b54ef38dfbd4e8c848809dace1e847))
- :lipstick: rendi coerenti i link ([05f6338](https://github.com/Smailen5/portfolio-website/commit/05f6338a2c86d6a835cdd31b36c69f23ae394ae0))
- :lipstick: rimuove classi superflue ([990a805](https://github.com/Smailen5/portfolio-website/commit/990a80501d3685d103cd04ab2475031fcd25093b))
- :pencil2: passa il tipo a cloneElement ([62bb293](https://github.com/Smailen5/portfolio-website/commit/62bb29398b1e74951ab23640ce1d784d410638d1))
- :pencil2: rinomina prop ([aeb653b](https://github.com/Smailen5/portfolio-website/commit/aeb653ba55ca4bb1ddbfaec30d2e1d518a4f74b7))
- :rotating_light: correggi errore di typescript ([aac0981](https://github.com/Smailen5/portfolio-website/commit/aac0981f67456cdea2ae73b56b6c3e9601eeed0c))
- :rotating_light: rimuovi attributo ([27fa94f](https://github.com/Smailen5/portfolio-website/commit/27fa94f6fe32da52a6e7ec3381f9751ef7c474f8))
- :speech_balloon: aggiunge &apos; ([638acf4](https://github.com/Smailen5/portfolio-website/commit/638acf4d15ac9247c6c8c5141298f61a3dc58b85))
- :truck: cambia link ([5052259](https://github.com/Smailen5/portfolio-website/commit/5052259bcc0c9d00619432415a4475624cb2d4cc))
- :truck: correggi link ([3634c7f](https://github.com/Smailen5/portfolio-website/commit/3634c7fe5b9e26fecde75f03bff2eed234e1af6f))
- :truck: modifica estensione ([289c4e1](https://github.com/Smailen5/portfolio-website/commit/289c4e1d5f210faab931915a6bdc7000c9fa0b8d))
- :truck: modifica estensione ([e525306](https://github.com/Smailen5/portfolio-website/commit/e52530603635c397390b4258b5400b30b0657e43))
- :truck: rimuovi estensione ([9693edb](https://github.com/Smailen5/portfolio-website/commit/9693edbaded6202d07f5a6b9d0fed72ac4e2c350))
- :truck: rinomina estensioni ([845236e](https://github.com/Smailen5/portfolio-website/commit/845236ebc2075e70b2dec890ade1aeeda3ac6cbb))
- :truck: rinomina estensioni ([7dd02fb](https://github.com/Smailen5/portfolio-website/commit/7dd02fbd0f1595a9cbf1d830e411c1cbe794e827))
- :truck: rinomina estensioni ([9ffc2b4](https://github.com/Smailen5/portfolio-website/commit/9ffc2b472cc1cb60750329f60d20e34091df3316))
- :wheelchair: modifica ordine heading ([6eceae4](https://github.com/Smailen5/portfolio-website/commit/6eceae4bb814a51de13e43fc9fe01ed0907312fa))
- :wrench: aggiungi dichiarazione ([31aeae7](https://github.com/Smailen5/portfolio-website/commit/31aeae7a2994c7d2b6e8828211072087a87b1285))
