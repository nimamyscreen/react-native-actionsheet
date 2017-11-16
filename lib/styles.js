import { StyleSheet, Dimensions, StatusBar } from 'react-native'

export const hairlineWidth = StyleSheet.hairlineWidth

export default StyleSheet.create({
	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		opacity: 0.4,
		backgroundColor: '#000'
	}
})

export const sheetStyle = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row'
	},
	bd: {
		flex: 1,
		alignSelf: 'flex-end',
		backgroundColor: 'rgba(0,0,0,0.9)',
		alignItems:'center'
	},
	title: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: 'white',
        width: Dimensions.get('window').width-24

    },
	message: {
    height: 40,
    paddingBottom: 10,
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)'
	},
	titleText: {
		color: 'gray',
		fontSize: 11,
	}
})

export const btnStyle = StyleSheet.create({
	wrapper: {
		height: 50,
		marginTop: hairlineWidth,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		width: Dimensions.get('window').width-24,
	},
	title: {
		fontSize: 18
	}
})





