/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GLOB_APP_TITLE: 'vite5-react-template'
  readonly VITE_PREFIXCLS: 'ims'
  readonly VITE_ROUTER_TYPE: 'static' | 'dynamic'
  readonly VITE_APP_BASE_API: '/api'
  readonly VITE_APP_HOMEPAGE: '/dashboard/workbench'
  readonly VITE_APP_ENV: 'development' | 'production'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
