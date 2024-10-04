import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ
(2). أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ
(3). وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ
(4). تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ
(5). فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). 'Алам таро кайфа фа-ъала Роббука би-'Ас-хаабиль-ФИИЛ
(2). 'Алам йаж-ъал кайдаҳум фии тадлииль
(3). Уа 'арсала ъалайҳим тойрон 'абаабиил
(4). Тармииҳим-би-хижааротим-мин-сижжииль
(5). Фажа-ъалаҳум ка-ъасфим-ма'кууль`;

const meaningKgText = `(1). Сенин Эгең пил ээлерин менен кылганын көрбөйсүңбү?
(2). Ал алардын арам ой-максаттарын ойрон кылбадыбы?
(3). Ал аларга тобу менен куштарды жөнөтпөдүбү?
(4). Ал куштар тигилердин үстүндө бышкан чопо таштарды ташташты
(5). Ошентип, аларды чайналган эгиндей кылып салды`;

const meaningRusText = `(1). Разве ты не видел, что сделал твой Господь с владельцами слона?
(2). Разве Он не запутал их козни
(3). и не наслал на них птиц стаями?
(4). Они бросали в них каменья из обожженной глины
(5). и превратили их в подобие изъеденных иссохших злаковых листьев.`;

export default function Al_Fil() {
  const { lang } = useLanguageState();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "ФИИЛ СҮРӨӨСҮ" : "аль-Филь"}
            arabicText={arabicText}
            rusText={rusText}
            meaningText={lang === "kg" ? meaningKgText : meaningRusText}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2E0A30",
  },
  container: {
    paddingHorizontal: 12,
    paddingBottom: 30,
    paddingTop: 20,
  },
});
