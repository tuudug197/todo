import React, { useRef } from 'react';
import { StyleSheet, Text, View, PanResponder, Animated } from 'react-native';

const Task = ({ task }) => {
    const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: position.x, dy: position.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start()
      },
    })
  ).current;
    
    
    return (
        <Animated.View
            style={[position.getLayout(), { flex: 1 }]}
            {...panResponder.panHandlers}
        >
            <View style={styles.taskContainer}>
            <View style={styles.taskContent}>
                <Text style={styles.taskText}>{task}</Text>
            </View>
        </View>
        </Animated.View>
        );
        
};

const styles = StyleSheet.create({
  taskContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
  },
});

export default Task;
