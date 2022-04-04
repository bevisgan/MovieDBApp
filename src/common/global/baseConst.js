import { Platform, Dimensions } from "react-native";

global.SCREEN_W = Dimensions.get("window").width;
global.SCREEN_H = Dimensions.get("window").height;
global.ISIOS = Platform.OS === "ios";
global.JXLog = function JXLog(...params) {
    let output = '';

    for (let para of params) {
        if (output.length > 0)
            output += '\n';

        output += JSON.stringify(para)
    }

    console.log(`**************************************\n${output}\n\n`);
}

