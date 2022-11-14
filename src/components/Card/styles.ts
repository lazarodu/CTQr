import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  card: {
    color: colors.white,
    borderColor: colors.darkBlue,
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    width: "95%",
    padding: 10
  },
  label: {
    fontWeight: 'bold'
  }
})

export default styles
