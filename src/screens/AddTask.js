import React, {Component} from 'react'
import {Modal, View, StyleSheet, TouchableWithoutFeedback, TouchableWithoutFeedbackBase } from 'react-native'

export default class AddTask extends Component {
    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>
                <TouchableWithoutFeedback>
                    <React.Fragment>
                        onPress={this.props.onCancel}
                        <View style={styles.background} />
                    </React.Fragment>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
})