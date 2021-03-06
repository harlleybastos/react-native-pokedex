import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const width = Dimensions.get('window').width / 2.2;
const height = Dimensions.get('window').height / 3;

const PokeContainer = styled.View`
  width: ${width}px;
  height: ${height}px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
`;

const PokeName = styled.Text`
  font-family: 'Roboto-Medium';
  text-align: center;
  font-size: 25px;
  bottom: 200px;
  color: #fff;
  text-transform: capitalize;
`;

const PokeNameSingle = styled.Text`
  font-family: 'Roboto-Medium';
  text-align: center;
  color: #fff;
  font-size: 25px;
  bottom: 180px;
  text-transform: capitalize;
`;

const PokeContainerTypeOne = styled.View`
  bottom: 65%;
  width: 50px;
  height: 50px;
  margin-right: 120px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const PokeContainerTypeOneSingle = styled.View`
  background-color: #bd4242;
  right: 10%;
  bottom: 195px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const PokeContainerTypeTwo = styled.View`
  background-color: #bd4242;
  bottom: 65%;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const PokeTypeOne = styled.Text`
  text-align: center;
  justify-content: center;
  text-transform: capitalize;
  color: #fff;
`;

const PokeTypeTwo = styled.Text`
  text-align: center;
  justify-content: center;
  text-transform: capitalize;
  color: #fff;
`;

const PokeNumber = styled.Text`
  font-family: 'Roboto-Bold';
  text-transform: uppercase;
  align-items: flex-start;
  flex-direction: row;
  bottom: 70px;
  margin-left: 5px;
  font-size: 24px;
  color: #fff;
`;

const PokeNumberSingle = styled.Text`
  font-family: 'Roboto-Bold';
  text-transform: uppercase;
  align-items: flex-start;
  flex-direction: row;
  bottom: 50px;
  right: 10px;
  font-size: 25px;
  color: #fff;
`;
export {
  PokeNumberSingle,
  PokeNumber,
  PokeTypeTwo,
  PokeTypeOne,
  PokeContainerTypeOne,
  PokeContainerTypeTwo,
  PokeName,
  PokeContainer,
  PokeContainerTypeOneSingle,
  PokeNameSingle,
};
