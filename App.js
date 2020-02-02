import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";

import fileSearch from "./assets/filesearch.png";
import fileUpload from "./assets/upload.png";

export default function Upload() {
  const [avatar, setAvatar] = useState();

  function imagePickerCall() {}

  async function uploadImage() {
    const data = new FormData();

    data.append("avatar", {
      uri: avatar.uri,
      type: avatar.type
    });

    await Axios.post("http://localhost:3333/files", data);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: avatar
            ? avatar.uri
            : "https://i.pinimg.com/originals/71/f3/51/71f3519243d136361d81df71724c60a0.png"
        }}
      />
      <TouchableOpacity style={styles.button}>
        <Image
          source={fileSearch}
          style={{ width: 30, height: 30, marginRight: 10, marginLeft: 13 }}
        />
        <Text style={styles.buttonText}>Escolher Imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image
          source={fileUpload}
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        <Text style={styles.buttonText} onPress={uploadImage}>
          Enviar Imagem
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 180,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row"
  },
  buttonText: {
    color: "#fff"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

// import React, { useState } from "react";
// import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

// import Axios from "axios";

// export default function Upload() {
//   const [avatar, setAvatar] = useState();

//   async function uploadImage() {
//     const data = new FormData();

//     data.append("avatar", {
//       uri: avatar.uri,
//       type: avatar.type
//     });

//     await Axios.post("http://localhost:3333/files", data);
//   }

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{
//           uri: avatar
//             ? avatar.uri
//             : "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png"
//         }}
//         style={styles.avatar}
//       />
//       <TouchableOpacity style={styles.button} >
//         <Text style={styles.buttonText}>Escolher imagem</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={uploadImage}>
//         <Text style={styles.buttonText}>Enviar imagem</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   button: {
//     width: 150,
//     height: 50,
//     borderRadius: 3,
//     backgroundColor: "#7159c1",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20
//   },
//   buttonText: {
//     color: "#fff"
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50
//   }
// });
