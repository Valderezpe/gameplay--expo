import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { Appointmenet } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background/Index";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile/Index";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "23/06 às 20:30h",
      description:
        "É hoje que vamos chegar ao challeenger sem perder uma partida de md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "23/06 às 20:30h",
      description:
        "É hoje que vamos chegar ao challeenger sem perder uma partida de md10",
    },
  ];
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails');
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointmenet
           data={item}
           onPress={handleAppointmentDetails}
           />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
