---
title: 🟢 async-redirect
description: Задание 60 посвящено использованию новой функции `redirectTo` в Angular Router для модернизации логики навигации.
author: thomas laforge
contributors:
  - tomalaforge
challengeNumber: 60
command: angular-async-redirect
sidebar:
  order: 23
  badge: New
---

## Условие

В этом задании вы работаете с Angular-приложением, в котором для смены маршрутов используется собственный метод `navigate` в файле `dashboard.ts`. С появлением новой функции `redirectTo` в Angular Router версии 20, цель — модернизировать кодовую базу, удалив старый метод `navigate` и переработав приложение так, чтобы для всей логики перенаправления использовалась функция `redirectTo`.

Ваша задача:

- Найти и удалить метод `navigate` в файле `dashboard.ts`.
- Переписать приложение так, чтобы для навигации использовалась новая функция `redirectTo` из Angular Router везде, где это необходимо.

Это позволит приложению использовать последние возможности Angular Router и соблюдать лучшие практики навигации и перенаправления.
