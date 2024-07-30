import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ
(2). فَذَلِكَ الَّذِي يَدُعُّ الْيَتِيمَ
(3). وَلَا يَحُضُّ عَلَى طَعَامِ الْمِسْكِينِ
(4). فَوَيْلٌ لِّلْمُصَلِّينَ
(5). الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ
(6). الَّذِينَ هُمْ يُرَاؤُونَ
(7). وَيَمْنَعُونَ الْمَاعُونَ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). 'Аро-'айталлазии йуказзибу бид - Диин
(2). Фазааликал-лазии йадуъ-ъуль йатиим
(3). Уа лаа йахудду ъалаа то-ъаамил мискиин
(4). Фа-уайлул-лил-мусоллиин
(5). 'Аллзиина ҳум ъан-солаатиҳим сааҳуун
(6). 'Аллазиина ҳум йуроо-уун
(7). Уа йамна-ъуунал -МАА-ЪУУН`;

const meaningKgText = `(1). Динди жалганга чыгарганды сен көрдүңбү?
(2). Дал ошол жетимдерди кууган,
(3). Жана да ал жардыларды тамак берүүгө үндөбөгөн (үгүттөбөгөн) неме
(4). Азап (болсун) намаз(ды начар) окуучуларга
(5). Анткени алар намаздарын унутуп коюшкан
(6). (анан да) алар (намаздарын) эл көрсүнгө жасашат (окушат)
(7). Жана да алар үй шаймандарын (башкаларга) беришпейт`;

const meaningRusText = `(1). Видел ли ты того, кто считает ложью воздаяние?
(2). Это – тот, кто гонит сироту
(3). и не побуждает накормить бедняка.
(4). Горе молящимся,
(5). которые небрежны к своим намазам,
(6). которые лицемерят
(7). и отказывают даже в мелочи!`;

export default function Al_Maun() {
  const { lang } = useLanguageState();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "МАУН СҮРӨӨСҮ" : "аль-Маун"}
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
    paddingBottom: 130,
    paddingTop: 20,
  },
});
