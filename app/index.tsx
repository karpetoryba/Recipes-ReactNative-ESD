import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function Index() {
  return (
    //for scrolling to footer
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/big.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.card}>
          <Text style={styles.title}> Recettes</Text>
          <Text style={styles.soustext}>
            Les meilleurs recettes de Bordeaux:
          </Text>
          <Text style={styles.centretext}>
            Les Meilleures Recettes de Bordeaux : Un Voyage Culinaire
            Authentique Découvrez les trésors culinaires de Bordeaux à travers
            des recettes authentiques qui capturent l'essence de cette région
            réputée pour sa gastronomie et ses vins. Ce guide propose une
            sélection des plats les plus emblématiques de la ville, revisités
            avec passion et tradition. Laissez-vous séduire par la douceur des
            cannelés bordelais, plongez dans les saveurs du fameux entrecôte à
            la bordelaise, et savourez la richesse des spécialités comme les
            huîtres du Bassin d'Arcachon. Chaque recette est un hommage au
            patrimoine gastronomique bordelais, offrant un équilibre parfait
            entre savoir-faire local et ingrédients de qualité. Que vous soyez
            amateur de cuisine ou simple curieux, préparez-vous à un festin qui
            vous transportera au cœur de Bordeaux.
          </Text>
          <Text style={styles.maintitle}>Les meilleurs recettes:</Text>
          <Text style={styles.recette}>
            1. Spaghetti bolognaise - Des pâtes avec de la sauce tomate et de la
            viande hachée
          </Text>
          <Text style={styles.recette}>
            2. Salade César - Une salade avec de la salade verte, du poulet, des
            croûtons et de la sauce César
          </Text>
          <Text style={styles.recette}>
            3. Tarte aux pommes - Une tarte sucrée avec des pommes
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.text}>
            © 2024 VotreNom. Tous droits réservés.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9E5",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FAEBD7",
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D2B48C",
    marginBottom: 15,
    shadowColor: "#8B4513",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8B4513",
    textAlign: "center",
    marginBottom: 10,
  },
  maintitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 8,
  },
  soustext: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 12,
    color: "#6B4226",
    textAlign: "center",
  },
  centretext: {
    marginBottom: 15,
    fontSize: 14,
    color: "#4B382A",
    lineHeight: 22,
    textAlign: "justify",
  },
  recette: {
    fontSize: 16,
    color: "#4B382A",
    marginVertical: 4,
  },
  footer: {
    backgroundColor: "#8B4513",
    padding: 10,
    alignItems: "center",
  },
  text: {
    color: "#FFF9E5",
    fontSize: 12,
  },
});
