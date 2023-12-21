import React from "react";

export default function Leadership() {
  return (
    <section className="w-full">
      <div className="text-center">
        <h1 className="font-PlayFairDisplay m-3 text-[40px] font-medium mb-24">
          Лидеры
        </h1>
      </div>

      <div className="w-[90%] mx-auto flex justify-center gap-10 mb-10">
        <div className="flip-card shadow-sm">
          <div className="flip-card-inner shadow-xl">
            <div className="flip-card-front">
              <div className="w-full h-full bg-cover bg-center bg-[url('/person_1.jpg')]">
                <div className="w-full h-full bg-gradient-to-t from-black/70"></div>
              </div>
            </div>
            <div className="flip-card-back border">
              <p className="mt-8">
                «Даже всемогущий Пойнтинг не имеет контроля над слепыми
                текстами, это почти неорфографическая жизнь. Однако однажды
                небольшая строка слепого текста по имени Лорем Ипсум решила уйти
                в далекий Мир Грамматики».
              </p>
              <h1 className="mt-60 mr-64">Джон Доу</h1>
              <p className="mr-64">Основатель</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner shadow-xl">
            <div className="flip-card-front">
            <div className="w-full h-full bg-cover bg-center bg-[url('/person_2.jpg')]">
                <div className="w-full h-full bg-gradient-to-t from-black/70"></div>
              </div>
            </div>
            <div className="flip-card-back">
              <p className="mt-8"> «Даже всемогущий Пойнтинг не имеет контроля над слепыми
                текстами, это почти неорфографическая жизнь. Однако однажды
                небольшая строка слепого текста по имени Лорем Ипсум решила уйти
                в далекий Мир Грамматики».</p>
              <h1 className="mt-60 mr-64">Лиза Адамс</h1>
              <p className="mr-64">Менеджер</p>
            </div>
          </div>
        </div>
        <div className="flip-card mb-16">
          <div className="flip-card-inner shadow-xl">
            <div className="flip-card-front">
            <div className="w-full h-full bg-cover bg-center bg-[url('/person_3.jpg')]">
                <div className="w-full h-full bg-gradient-to-t from-black/70"></div>
              </div>
            </div>
            <div className="flip-card-back">
            <p className="mt-8"> «Даже всемогущий Пойнтинг не имеет контроля над слепыми
                текстами, это почти неорфографическая жизнь. Однако однажды
                небольшая строка слепого текста по имени Лорем Ипсум решила уйти
                в далекий Мир Грамматики».</p>
              <h1 className="mt-60 mr-64">Джефф Джонсон</h1>
              <p className="mr-64">СЕО</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
