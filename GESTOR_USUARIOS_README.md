# Gestor de Usuarios de Prueba

Una aplicación React Native desarrollada con Expo que permite gestionar usuarios utilizando la API de reqres.in.

## 🚀 Características

- **Lista de usuarios**: Visualiza usuarios con nombre, email y avatar
- **Crear usuarios**: Formulario para agregar nuevos usuarios con validación
- **Estados de carga**: Indicadores visuales durante las operaciones
- **Manejo de errores**: Gestión elegante de errores de red
- **Paginación**: Navegación entre páginas de usuarios
- **Mensajes de éxito**: Notificaciones animadas al crear usuarios
- **Redux Toolkit**: Manejo de estado global con thunks asíncronos

## 🛠️ Tecnologías Utilizadas

- **React Native**: Framework para desarrollo móvil
- **Expo**: Plataforma de desarrollo
- **Redux Toolkit**: Manejo de estado
- **React Redux**: Integración de Redux con React
- **TypeScript**: Para tipado estático (configuración)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── UserList.js          # Lista de usuarios con paginación
│   ├── UserForm.js          # Formulario de creación de usuarios
│   └── SuccessMessage.js    # Componente de mensaje de éxito
├── features/
│   └── users/
│       └── usersSlice.js    # Slice de Redux para usuarios
├── screens/
│   └── UserManagerScreen.js # Pantalla principal
└── store/
    └── store.js             # Configuración del store
```

## 🌐 API Endpoints

La aplicación consume la siguiente API de reqres.in:

- **GET** `https://reqres.in/api/users?page=1` - Lista de usuarios
- **POST** `https://reqres.in/api/users` - Crear usuario

### Formato de creación de usuario:
```json
{
  "name": "Nombre del usuario",
  "job": "Rol o trabajo"
}
```

## 🏃‍♂️ Cómo Ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd TPReactNative
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar la aplicación**
   ```bash
   npm start
   ```

4. **Ejecutar en dispositivo/emulador**
   - Para Android: `npm run android`
   - Para iOS: `npm run ios`
   - Para Web: `npm run web`

## 🔧 Funcionalidades Implementadas

### ✅ Requisitos Principales
- [x] Pantalla principal con lista de usuarios
- [x] Mostrar nombre y email de usuarios
- [x] Estados de carga y error
- [x] Formulario de creación con campos nombre y job
- [x] Envío POST a la API
- [x] Actualización del estado global al crear usuario
- [x] Redux con thunks para fetchUsers y createUser
- [x] Componentes conectados con useSelector/useDispatch

### ✅ Extras Implementados
- [x] Paginación simple (anterior/siguiente)
- [x] Mensaje de "Usuario creado exitosamente"
- [x] Componentes reutilizables (UserList, UserForm, SuccessMessage)
- [x] Validación de formularios
- [x] Diseño responsivo y atractivo
- [x] Manejo de errores detallado
- [x] Animaciones en mensajes de éxito

## 🎨 Características de UX/UI

- **Diseño moderno**: Interfaz limpia con sombras y bordes redondeados
- **Feedback visual**: Indicadores de carga, estados de error y éxito
- **Validación en tiempo real**: Mensajes de error inmediatos
- **Accesibilidad**: Botones con estados disabled apropiados
- **Animaciones**: Transiciones suaves para mensajes

## 🧪 Estado de Redux

La aplicación maneja el siguiente estado global:

```javascript
{
  users: {
    items: [],           // Array de usuarios
    status: 'idle',      // Estado de carga para fetch
    error: null,         // Error de fetch
    createStatus: 'idle', // Estado de carga para create
    createError: null,   // Error de creación
    currentPage: 1,      // Página actual
    totalPages: 1,       // Total de páginas
    successMessage: null // Mensaje de éxito
  }
}
```

## 📱 Capturas de Pantalla

La aplicación incluye:
- Header con título y descripción
- Formulario de creación con validación
- Lista de usuarios con avatares
- Controles de paginación
- Mensajes flotantes de éxito
- Estados de carga y error

## 🐛 Manejo de Errores

- Errores de red se muestran con opción de reintentar
- Validación de campos obligatorios
- Mensajes de error específicos para cada campo
- Estados de loading para prevenir múltiples envíos

## 🤝 Contribuir

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear una rama para la feature (`git checkout -b feature/AmazingFeature`)
3. Commit los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es parte de un trabajo práctico educativo.