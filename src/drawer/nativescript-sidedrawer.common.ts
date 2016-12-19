//

import { Color } from 'color'
import { ImageSource } from 'image-source'
import { isDefined } from 'utils/types'



export interface TnsSideDrawerItem {
	title: string
	androidIcon: string
	iosIcon: string
	fn: {
		method: Function,
		context?: any
	}
}

export interface TnsSideDrawerOptions {
	templates: Array<TnsSideDrawerItem>
	textColor?: Color
	headerBackgroundColor?: Color
	backgroundColor?: Color
	logoImage?: ImageSource
	title: string
	subtitle?: string
}

export class TnsSideDrawerCommonClass {

	protected static isBuilt = false
	protected templates: Array<TnsSideDrawerItem>
	protected textColor = new Color('white')
	protected headerBackgroundColor = new Color('#343C45')
	protected backgroundColor = new Color('#556270')
	protected logoImage: ImageSource
	protected title: string
	protected subtitle: string

	build(opts: TnsSideDrawerOptions): boolean {
		if (TnsSideDrawerCommonClass.isBuilt == true) {
			console.warn('TnsSideDrawer.isBuilt == true\nyouve already built a sidedrawer')
			return true
		}
		TnsSideDrawerCommonClass.isBuilt = true
		this.templates = opts.templates
		if (isDefined(opts.textColor)) {
			this.textColor = opts.textColor
		}
		if (isDefined(opts.headerBackgroundColor)) {
			this.headerBackgroundColor = opts.headerBackgroundColor
		}
		if (isDefined(opts.backgroundColor)) {
			this.backgroundColor = opts.backgroundColor
		}
		this.title = opts.title
		if (isDefined(opts.subtitle)) {
			this.subtitle = opts.subtitle
		}
		return false
	}

}