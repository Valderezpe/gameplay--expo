import React from 'react';
import {View, FlatList} from 'react-native';
import { Guild, GuildProps, } from '../../components/guild'
import { ListDivider } from '../../components/ListDivider';

import {styles} from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect}: Props){
  const guilds =[
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Hoje  dia game',
      icon: 'image.png',
      owner: true
    }
  ];
  return(
    <View style={styles.container}>
    <FlatList
    data={guilds}
    keyExtractor={item => item.id}
    renderItem={({item}) => (
     <Guild data={item}
     onPress= {() => handleGuildSelect(item)}
     />
    )}
    showsHorizontalScrollIndicator={false}
    ItemSeparatorComponent={() => <ListDivider/> }
    style={styles.guilds}
    />
    </View>
  )
}