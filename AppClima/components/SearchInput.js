import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types'

export default class SearchInput extends React.Component {
  state = {
    text: ''
  }

  handleSubmitingEditing = () => {
    const { onSubmit } = this.props
    const { text } = this.state
    if (!text) return
    onSubmit(text)
    this.setState({text: ''})
  }

  render() {
    const { text } = this.state
    return(
      <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={this.props.placeholder}
        placeholderTextColor="white"
        value={text}
        onChangeText={text => this.setState({text})}
        onSubmitEditing={this.handleSubmitingEditing}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#666',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 20
  },
  textInput: {
    flex: 1,
    color: 'white'
  }
})

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
  placeholder: '',
}

