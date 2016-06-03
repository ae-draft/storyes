import * as React from 'react';

const _svgLoader = '<image xlink:href="_Resources/Web/Streamline/Loading-new.svg" src="_Resources/Web/Streamline/Loading-new.gif" width="64" height="64" />';

export const Loader = (props) => (
    <div className="react-loader">
        <svg width="64" height="64" dangerouslySetInnerHTML={{__html: _svgLoader }} />
    </div>
);

export const NoResult = (props) => (
    <div className="ag-message_noresult">
        <div>
            <h3>{props.message || "Ничего не найдено"}</h3>
            <span>{props.additional || "Поробуйте изменить условия поиска"}</span>
        </div>
    </div>
);

export const AppError = () => <NoResult {...{message: "Что-то пошло не так", additional: "сообщите нам о возникшей проблеме"}} />;

export const RequestInProgress = (props) => (
    <div className="ag-process_request">
        <div className="ag-wrapper">
            {props.isShow ? <Loader /> : null}
        </div>
    </div>
);
