import React, { useState, useEffect } from 'react';
import { Animated, Text } from 'react-native';
import styles from 'src/page/BufferingPage/styles';
import { HOME_PAGE } from "src/navigation/navigationConst";
import GradientView from "src/common/elements/View/GradientView";
import BaseView from "src/common/elements/View/BaseView";

type Props = {
    navigation: any
}

type AnimatedObj = {
    toValue: number;
    timing?: number,
    duration?: number,
    useNativeDriver: boolean
}; 

const BufferPage: React.FC<Props> = ({navigation}) => {
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const animatedDuration = 2000;
    useEffect(() => {
        startAnimation();
        initProcess();
    }, []);

    const initProcess = async () => {        
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: HOME_PAGE }],
            });
            return;
        }, animatedDuration);
    }

    const startAnimation = () => {
        let animatedFrom: AnimatedObj = {
            toValue: 0,
            timing: animatedDuration,
            useNativeDriver: true
        }
        let animatedTo: AnimatedObj = {
            toValue: 1,
            duration: animatedDuration,
            useNativeDriver: true
        }
        Animated.timing(animation, animatedFrom).start(() => {
            Animated.timing(animation, animatedTo).start();
        })
    }

    return (
        <BaseView style={styles.container}>
            <Animated.View
                style={{
                    opacity: animation
                }}
            >
                <GradientView style={styles.gradientContainer}>
                    <Text style={styles.title}>MovieDB</Text>
                </GradientView>

            </Animated.View>
        </BaseView>
    )
}

export default BufferPage;