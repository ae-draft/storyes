export const toggleImportantError = (requestMessage, err) => `Не удалось изменить признак "Важное" для запроса: 
					'<span style="color:gray; font-style:italic;">
						${requestMessage.slice(0, 10)}
					</span>...'
					<br /><hr style="margin: 5px; border-top: 1px solid red;"/>
					Причина сбоя: <span style="color:red;">${err.message}</span>`;