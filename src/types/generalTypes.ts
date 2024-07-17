

export const APP_STATUS = {
    IDLE :  'idle',
    ERROR : 'error',
    READY_UPLOAD : 'ready_upload',
    LOADING : 'loading', 
    READY_USAGE : 'ready_usage'
  } as const 
  
  export type AppStatusType = 'idle' | 'error' | 'ready_upload' | 'loading' | 'ready_usage'