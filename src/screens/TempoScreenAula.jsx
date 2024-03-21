import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Searchbar, Text } from "react-native-paper";

/**
 *
 * LOGICA SIMPLES
 * - ENTREI NESSA TELA
 * - OPA! PRECISO BUSCAR A TEMPERATURA
 * - COMO? QUEM É O CARA QUE EXECUTA QUANDO ENTRA?
 * - LEMBREI É O U... COM [] VAZIO
 * -
 */

export default function TempoScreenAula() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cidade, setCidade] = useState("Joinville");

  const fetchTempo = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`;

    // Faça a requisição usando Axios
    try {
      const response = await axios.get(url);
      console.log(response.data);
      // // A resposta está disponível no objeto response.data

      setTempoData(response.data);
    } catch (error) {
      // Trate o erro
      console.error("There was an error!", error);
    }
  };

  useEffect(() => {
    console.log(cidade);
  }, [cidade]);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Button onPress={() => setCidade(searchQuery)}>Buscar</Button>
    </View>
  );
}
