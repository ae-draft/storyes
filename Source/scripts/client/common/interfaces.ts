export interface IUser { 
	Id: number | string,
	Name: string,
	AvatarUrl: string
}

export interface IbasicFiltersProps { 
	users?: Array<IUser>,
	requestsType?: Array<IRequestType>,
	filters: IFiltersState,
	periods?: Array<any>,
	activeFilters?: { userId: number, typeId: number, periodId: number }
	boundFilterActionCreators: any
}

export interface IRequestType {
	Id: number | string,
	Name: string
}

export interface IControl { 
	Type: number | string,
	TargetId: number | string
}

export interface IRequestItem {
	Id: number | string,
	Message: string,
	Type: number,
	CreateDate: any,
	Author: IUser,
	IsImportant: boolean,
	Controls: Array<IControl>,
	toggleImportant(itemId: string | number): Promise<any>
}

export interface IRequestContainerPropsInbox {
	items: Array<IRequestItem>,
	toggleImportant?(itemId: string | number): Promise<any>,
	loadNextInbox(target: string): any,
	total: number
}
export interface IRequestContainerPropsOutbox {
	items: Array<IRequestItem>,
	toggleImportant?(itemId: string | number): Promise<any>,
	loadNextOutbox(target: string): any,
	total: number
}

export interface IRequestsObject {
	items: Array<IRequestItem>,
	isVisible: boolean,
	total: number
}

export interface IRequestsState {
	inbox: IRequestsObject,
	outbox: IRequestsObject
}

export interface IFiltersState {
	filters: Array<any>
	showDateRangeFilters: boolean
}

export interface IAction { 
	type: string,
	payload?: any
}