import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.attendace_check___back_end___authentication____authentication": {"attend_form_data": {}, "form_data": {}, "id_corr": 0, "login_success": false, "member_data": [], "pw_corr": 0}, "reflex___state____state.attendace_check___view___addmember____add_member": {"member_birth": "", "member_id": "", "member_name": "", "member_phone_number": "", "member_pw": "", "member_sex": ""}, "reflex___state____state.attendace_check___view___attending____send_attending": {"curr_url": "", "form_data": {}, "initialize": 0, "member_data": [], "member_id": "", "section_name": ""}, "reflex___state____state.attendace_check___view___attendancy___select__date": {"dd": "01", "mm": "06", "yyyy": "2025"}, "reflex___state____state.attendace_check___attendace_check____state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__attendace_check___back_end___authentication____authentication: createContext(null),
  reflex___state____state__attendace_check___view___addmember____add_member: createContext(null),
  reflex___state____state__attendace_check___view___attending____send_attending: createContext(null),
  reflex___state____state__attendace_check___view___attendancy___select__date: createContext(null),
  reflex___state____state__attendace_check___attendace_check____state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2025-06-01 15:47:11.881058"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__attendace_check___back_end___authentication____authentication, dispatch_reflex___state____state__attendace_check___back_end___authentication____authentication] = useReducer(applyDelta, initialState["reflex___state____state.attendace_check___back_end___authentication____authentication"])
  const [reflex___state____state__attendace_check___view___addmember____add_member, dispatch_reflex___state____state__attendace_check___view___addmember____add_member] = useReducer(applyDelta, initialState["reflex___state____state.attendace_check___view___addmember____add_member"])
  const [reflex___state____state__attendace_check___view___attending____send_attending, dispatch_reflex___state____state__attendace_check___view___attending____send_attending] = useReducer(applyDelta, initialState["reflex___state____state.attendace_check___view___attending____send_attending"])
  const [reflex___state____state__attendace_check___view___attendancy___select__date, dispatch_reflex___state____state__attendace_check___view___attendancy___select__date] = useReducer(applyDelta, initialState["reflex___state____state.attendace_check___view___attendancy___select__date"])
  const [reflex___state____state__attendace_check___attendace_check____state, dispatch_reflex___state____state__attendace_check___attendace_check____state] = useReducer(applyDelta, initialState["reflex___state____state.attendace_check___attendace_check____state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.attendace_check___back_end___authentication____authentication": dispatch_reflex___state____state__attendace_check___back_end___authentication____authentication,
      "reflex___state____state.attendace_check___view___addmember____add_member": dispatch_reflex___state____state__attendace_check___view___addmember____add_member,
      "reflex___state____state.attendace_check___view___attending____send_attending": dispatch_reflex___state____state__attendace_check___view___attending____send_attending,
      "reflex___state____state.attendace_check___view___attendancy___select__date": dispatch_reflex___state____state__attendace_check___view___attendancy___select__date,
      "reflex___state____state.attendace_check___attendace_check____state": dispatch_reflex___state____state__attendace_check___attendace_check____state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state value={ reflex___state____state }>
    <StateContexts.reflex___state____state__attendace_check___back_end___authentication____authentication value={ reflex___state____state__attendace_check___back_end___authentication____authentication }>
    <StateContexts.reflex___state____state__attendace_check___view___addmember____add_member value={ reflex___state____state__attendace_check___view___addmember____add_member }>
    <StateContexts.reflex___state____state__attendace_check___view___attending____send_attending value={ reflex___state____state__attendace_check___view___attending____send_attending }>
    <StateContexts.reflex___state____state__attendace_check___view___attendancy___select__date value={ reflex___state____state__attendace_check___view___attendancy___select__date }>
    <StateContexts.reflex___state____state__attendace_check___attendace_check____state value={ reflex___state____state__attendace_check___attendace_check____state }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state value={ reflex___state____state__reflex___state____update_vars_internal_state }>
      <DispatchContext value={dispatchers}>
        {children}
      </DispatchContext>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state>
    </StateContexts.reflex___state____state__attendace_check___attendace_check____state>
    </StateContexts.reflex___state____state__attendace_check___view___attendancy___select__date>
    </StateContexts.reflex___state____state__attendace_check___view___attending____send_attending>
    </StateContexts.reflex___state____state__attendace_check___view___addmember____add_member>
    </StateContexts.reflex___state____state__attendace_check___back_end___authentication____authentication>
    </StateContexts.reflex___state____state>
  )
}