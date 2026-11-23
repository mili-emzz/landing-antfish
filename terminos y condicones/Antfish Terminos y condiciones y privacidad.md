# **AntFish: Aviso de Privacidad y Términos y Condiciones**

**Última actualización:** 20 de noviembre de 2026  
 **Responsable:** Equipo AntFish  
 **Contacto:** antfish-soporte@gmail.com

> **Nota sobre la naturaleza del proyecto.** AntFish es un proyecto escolar de carácter académico y gratuito. No constituye un servicio comercial ni una institución financiera o de seguridad certificada.

---

# **PARTE I. AVISO DE PRIVACIDAD**

## **1\. Identidad y domicilio del responsable**

El **Equipo AntFish** (en adelante, "AntFish", "nosotros" o "el Responsable") es responsable del tratamiento de los datos personales recabados a través de la aplicación móvil AntFish y de su API REST, conforme a la legislación mexicana en materia de protección de datos personales en posesión de los particulares.

* **Correo electrónico de contacto:** antfish-soporte@gmail.com  
* **Domicilio:** Carretera Tuxtla Gutiérrez \- Portillo Zaragoza Km 21+500, Las Brisas, 29150 Suchiapa, Chiapas, México

## **2\. ¿Qué es AntFish?**

AntFish es una aplicación móvil (Android e iOS) que analiza mensajes SMS y URLs sospechosas para estimar su nivel de riesgo de phishing o smishing. Para ello combina un motor propio de reglas heurísticas con servicios externos de inteligencia de amenazas, y devuelve una puntuación de 0 a 100 con un semáforo de riesgo (bajo, medio, alto o crítico), los hallazgos detectados y recomendaciones.

## **3\. Datos personales que recabamos**

### **3.1 Datos de la cuenta**

| Dato | Finalidad |
| ----- | ----- |
| Correo electrónico | Identificar la cuenta, iniciar sesión, verificar la cuenta y recuperar la contraseña |
| Nombre | Personalizar la experiencia dentro de la app |
| Contraseña (solo registro local) | Autenticación. **Nunca se almacena en texto plano**: se guarda únicamente su hash con el algoritmo Argon2id |
| Identificador de Google (`google_sub`) (solo inicio de sesión con Google) | Vincular la cuenta con Google Sign-In |
| Estado de la cuenta, fecha de registro y de verificación | Gestión y seguridad de la cuenta |

### **3.2 Datos de uso del servicio**

* **Historial de análisis:** tipo de entrada (SMS o URL), puntuación, nivel de riesgo, hallazgos detectados, fecha del análisis, resultados de las fuentes consultadas y las **URLs extraídas** del contenido analizado.  
* **Métricas personales:** número total de análisis, desglose entre SMS y URLs y cantidad de amenazas detectadas, mostrados en tu panel.

### **3.3 Contenido que envías para análisis**

* **Texto de mensajes SMS o URLs** que tú decides enviar. Este contenido viaja de forma cifrada (HTTPS/TLS) hasta nuestro servidor para ser procesado.  
* **El texto del SMS no se guarda en nuestra base de datos.** Se procesa en la memoria del servidor durante el análisis y después se descarta. De él solo se conservan:  
  * Un **hash irreversible** del mensaje (HMAC-SHA256 con un secreto del servidor), que no permite reconstruir el texto.  
  * Hasta **2 URLs extraídas**, en forma normalizada: se conserva el dominio y la ruta, y se **descartan** los parámetros de consulta (query string), los fragmentos y la información de usuario incrustada en el enlace.

> **Recomendación:** evita enviar mensajes que contengan información sensible innecesaria (números de tarjeta, contraseñas, códigos de un solo uso). Para el análisis solo necesitamos el contenido sospechoso.

### **3.4 Datos técnicos**

* **Dirección IP:** se utiliza de forma temporal para limitar intentos de autenticación (control de abuso). Esta clave se guarda en memoria (Redis) por aproximadamente **60 segundos**.  
* **Tokens de sesión (JWT):** se almacenan en tu dispositivo, en el almacenamiento seguro del sistema operativo.

### **3.5 Datos que NO recabamos**

AntFish **no** accede a tu bandeja de SMS ni a tus contactos, y no lee tus mensajes de forma automática. Solo se analiza lo que tú pegas o compartes voluntariamente con la app. No recabamos datos sensibles en los términos de la ley de la materia (salud, origen racial, creencias religiosas, orientación sexual, etc.).

## **4\. Finalidades del tratamiento**

**Finalidades primarias (necesarias para el servicio):**

1. Crear y administrar tu cuenta y autenticarte.  
2. Analizar los SMS y URLs que envías y entregarte un diagnóstico de riesgo.  
3. Mantener tu historial de análisis y tu panel de estadísticas.  
4. Verificar tu correo electrónico y permitir la recuperación de tu contraseña.  
5. Proteger el servicio contra abuso, fraude y accesos no autorizados.  
6. Optimizar el rendimiento mediante una caché de reputación de URLs.

**Finalidades secundarias:** AntFish **no utiliza** tus datos para publicidad, perfilado comercial ni venta a terceros.

## **5\. Transferencias y servicios de terceros**

AntFish **no vende ni comparte tus datos personales con terceros con fines comerciales**. Para prestar el servicio utilizamos proveedores tecnológicos que intervienen en el tratamiento:

| Tercero | Para qué se usa | Datos involucrados |
| ----- | ----- | ----- |
| **Google Web Risk** | Verificar la reputación de URLs | URL normalizada |
| **VirusTotal** | Verificar la reputación de URLs | URL normalizada |
| **PhishTank** | Verificar la reputación de URLs | URL normalizada |
| **Google Sign-In** | Inicio de sesión con Google | Token de identidad de Google, correo y nombre |
| **Resend** | Envío de códigos de verificación por correo | Correo electrónico y código de verificación |
| **Vercel** | Alojamiento del frontend web | Datos técnicos de conexión propios del servicio |
| **Amazon Web Services (AWS)** | Alojamiento del backend (API y bases de datos) | Datos descritos en este aviso |

Estos servicios tienen sus propias políticas de privacidad, sobre las cuales AntFish no tiene control.

Los servicios de reputación reciben **únicamente URLs**, no el texto completo de tus mensajes.

**Transferencias internacionales:** algunos de estos proveedores, entre ellos AWS, pueden tratar datos fuera de México, la región de AWS donde está alojado el backend: us-east-1

## **6\. Conservación de los datos**

| Información | Plazo de conservación |
| ----- | ----- |
| Historial de análisis | Hasta que tú borres cada análisis o elimines tu cuenta (no hay expiración automática) |
| Respuestas crudas de las APIs de reputación | **30 días** y luego se eliminan automáticamente |
| Texto original del SMS | **No se conserva** |
| Cuentas registradas que no completan la verificación del correo | Se eliminan automáticamente a las **48 horas** |
| Códigos de verificación | **10 minutos** de vigencia, solo en memoria temporal |
| Clave temporal de control por IP | Aproximadamente **60 segundos** |
| Caché de reputación de URLs | Temporal (vigencia limitada), sin asociarse a tu identidad |

## **7\. Derechos ARCO y cómo ejercerlos**

Tienes derecho a **Acceder, Rectificar, Cancelar u Oponerte** al tratamiento de tus datos personales, así como a **revocar tu consentimiento** y a **limitar su uso o divulgación**.

* **Cancelación inmediata desde la app:** puedes borrar análisis individuales y **eliminar tu cuenta** directamente desde la aplicación. Al eliminar tu cuenta, tus datos asociados (historial y métricas) se borran y tu registro de usuario se **anonimiza** (el correo se sustituye por un identificador genérico y se eliminan el nombre, la contraseña y el vínculo con Google). La eliminación requiere que confirmes tu identidad nuevamente.  
* **Otras solicitudes (acceso, rectificación, oposición, revocación):** envía un correo a **antfish-soporte@gmail.com** con el asunto "Derechos ARCO", indicando tu nombre, el correo de tu cuenta y una descripción clara de tu solicitud. Es posible que te pidamos confirmar tu identidad.  
* **Plazo de respuesta:** procuraremos responder en un máximo de **20 días hábiles** contados a partir de la recepción de tu solicitud.

Si consideras que tu derecho a la protección de datos ha sido vulnerado, puedes acudir ante la autoridad competente en materia de protección de datos personales en México.

## **8\. Medidas de seguridad**

Aplicamos medidas técnicas razonables para proteger tus datos, entre ellas:

* Comunicaciones cifradas con HTTPS/TLS.  
* Contraseñas protegidas con hash Argon2id.  
* Autenticación mediante tokens JWT (acceso y renovación).  
* Códigos de verificación protegidos con hash y de vida corta.  
* Almacenamiento seguro de tokens en el dispositivo.  
* Normalización de URLs para no conservar parámetros potencialmente sensibles.  
* Límite de intentos de autenticación para prevenir abuso.

Ningún sistema es completamente invulnerable. Dado que AntFish es un proyecto escolar, no podemos garantizar una seguridad absoluta, pero nos comprometemos a notificarte oportunamente si ocurre una vulneración que afecte significativamente tus derechos.

## **9\. Menores de edad**

La aplicación puede ser utilizada por cualquier persona. No obstante, **las personas menores de 18 años deben contar con el consentimiento, autorización y supervisión de su madre, padre, tutor o representante legal** para registrarse y utilizar AntFish.

**El Equipo AntFish no se hace responsable del uso de la aplicación por parte de menores de edad sin el consentimiento de sus padres o tutores**, ni de los datos que dichos menores proporcionen sin dicha autorización. El registro y uso de la app implica la declaración de que, si el usuario es menor de edad, cuenta con la autorización correspondiente.

Si identificamos que se han recabado datos de un menor sin autorización de sus padres o tutores, procederemos a eliminarlos. Los padres o tutores pueden solicitarlo escribiendo a **antfish-soporte@gmail.com**.

## **10\. Cookies y tecnologías de rastreo**

Hasta donde tenemos conocimiento, el backend de AntFish **no integra** servicios de analíticas, publicidad ni reporte de fallos de terceros. **\[POR COMPLETAR: confirmar que la app Flutter y el frontend en Vercel tampoco los incluyen, revisando sus dependencias y configuración. Si se incluye alguno, debe declararse aquí.\]**

## **11\. Cambios al aviso de privacidad**

Podemos modificar este aviso por cambios legales, técnicos o del proyecto. Publicaremos la versión actualizada en la aplicación indicando la fecha de última actualización. Si los cambios son sustanciales, te lo notificaremos por la app o por correo electrónico.

## **12\. Consentimiento**

Al crear una cuenta, iniciar sesión o utilizar AntFish, declaras haber leído este Aviso de Privacidad y otorgas tu consentimiento para el tratamiento de tus datos conforme a lo aquí descrito.

---

# **PARTE II. TÉRMINOS Y CONDICIONES DE USO**

## **1\. Aceptación de los términos**

Al descargar, registrarte o utilizar AntFish (la "Aplicación"), aceptas estos Términos y Condiciones y el Aviso de Privacidad. Si no estás de acuerdo con ellos, no debes usar la Aplicación.

## **2\. Descripción del servicio**

AntFish es una herramienta **gratuita**, desarrollada como **proyecto escolar**, que analiza mensajes SMS y URLs para estimar su probabilidad de ser phishing o smishing, mostrando una puntuación, un semáforo de riesgo, hallazgos y recomendaciones.

## **3\. Naturaleza del resultado y limitación de responsabilidad**

1. **Herramienta de apoyo.** Los resultados de AntFish son **orientativos** y se basan en reglas heurísticas y en servicios de terceros. **No garantizan la detección del 100 % de las amenazas** ni la ausencia de riesgo.  
2. **Falsos positivos y negativos.** Un resultado de "riesgo bajo" no asegura que un enlace o mensaje sea seguro, y uno de "riesgo alto" o "crítico" no asegura que sea fraudulento.  
3. **Decisión del usuario.** Eres el único responsable de las decisiones que tomes con base en los resultados, como abrir un enlace, compartir información o realizar operaciones financieras.  
4. **Sin garantías.** El servicio se ofrece **"tal cual" y "según disponibilidad"**, sin garantías expresas o implícitas de continuidad, exactitud, disponibilidad o idoneidad para un fin particular.  
5. **Límite de responsabilidad.** En la máxima medida permitida por la ley, el Equipo AntFish no será responsable por daños directos o indirectos, pérdidas económicas, robo de información, fraudes o cualquier perjuicio derivado del uso o de la imposibilidad de usar la Aplicación, ni de fallas, límites o cambios en los servicios de terceros (Google Web Risk, VirusTotal, PhishTank, entre otros).  
6. **Servicio académico.** Al ser un proyecto escolar, el servicio puede presentar interrupciones, cambios o terminar en cualquier momento.

## **4\. Registro y cuenta**

1. Para usar ciertas funciones debes crear una cuenta con correo y contraseña (verificando tu correo con un código) o mediante Google Sign-In.  
2. Debes proporcionar información veraz y mantenerla actualizada.  
3. Eres responsable de la confidencialidad de tus credenciales y de toda actividad realizada desde tu cuenta. Avísanos de inmediato a **antfish-soporte@gmail.com** si sospechas un uso no autorizado.  
4. Podemos suspender o eliminar cuentas que incumplan estos términos.

## **5\. Menores de edad**

La Aplicación está disponible para cualquier persona; sin embargo, **los menores de 18 años solo pueden usarla con el consentimiento, autorización y supervisión de sus padres, tutores o representantes legales**. **El Equipo AntFish no asume responsabilidad alguna por el uso de la Aplicación por parte de menores sin dicho consentimiento.** Al registrarte, declaras que, si eres menor de edad, cuentas con esa autorización. Los padres o tutores son responsables de la actividad del menor en la Aplicación.

## **6\. Uso aceptable y conductas prohibidas**

AntFish está diseñado exclusivamente con fines **defensivos y educativos**. **No aprobamos ni permitimos** el uso de AntFish como herramienta con fines maliciosos. Queda prohibido, de forma enunciativa y no limitativa:

1. Usar la Aplicación para **planear, probar, optimizar o perfeccionar** campañas de phishing, smishing, fraude, suplantación de identidad u otros ataques (por ejemplo, para ajustar mensajes hasta evadir la detección).  
2. Utilizar los resultados para **eludir mecanismos de seguridad** o mejorar contenido malicioso.  
3. Realizar escaneos masivos o automatizados, o usar bots, scripts o cualquier medio que sobrecargue el servicio o **abuse de la API o de las cuotas** de los servicios externos.  
4. Intentar acceder sin autorización a cuentas, sistemas, bases de datos o infraestructura de AntFish, o vulnerar, desactivar o evadir sus medidas de seguridad (incluidos los límites de intentos y la autenticación).  
5. Realizar ingeniería inversa, descompilar o extraer el código con fines ilícitos, salvo lo permitido por la ley.  
6. Enviar contenido ilícito o que viole derechos de terceros, o enviar datos personales de otras personas sin legitimación para ello.  
7. Suplantar a otra persona, o crear cuentas con datos falsos o ajenos.  
8. Cualquier uso contrario a la ley mexicana o a estos términos.

El incumplimiento puede dar lugar a la **suspensión o eliminación inmediata de la cuenta**, sin previo aviso, y a la colaboración con las autoridades cuando corresponda.

## **7\. Uso responsable de la información enviada**

Al enviar contenido para su análisis, declaras tener derecho a hacerlo. Te recomendamos no enviar información sensible innecesaria. El tratamiento de los datos se rige por el Aviso de Privacidad de la Parte I.

## **8\. Servicios de terceros**

AntFish depende de servicios de terceros (Google Web Risk, VirusTotal, PhishTank, Google Sign-In, Resend, entre otros). Su disponibilidad, exactitud y condiciones no están bajo nuestro control. Si alguno falla o alcanza sus límites de uso, el análisis puede realizarse con las fuentes disponibles y con las reglas internas, por lo que el resultado podría ser menos completo.

## **9\. Propiedad intelectual**

El código, diseño, marca, nombre y contenidos de AntFish pertenecen al Equipo AntFish o a sus respectivos titulares. Se te concede una licencia **limitada, personal, no exclusiva, intransferible y revocable** para usar la Aplicación conforme a estos términos. Los servicios y marcas de terceros pertenecen a sus propietarios.

## **10\. Gratuidad**

AntFish es **100 % gratuita**. No existen planes de pago ni cobros. Nos reservamos el derecho de establecer límites razonables de uso (por ejemplo, límites de solicitudes) para proteger el servicio.

## **11\. Disponibilidad y modificaciones del servicio**

Podemos modificar, suspender o discontinuar la Aplicación, total o parcialmente, en cualquier momento, incluyendo por la conclusión del proyecto escolar. Procuraremos avisar con anticipación razonable cuando sea posible, y podrás eliminar tu cuenta y tus datos en cualquier momento.

## **12\. Terminación**

Puedes dejar de usar AntFish y eliminar tu cuenta cuando quieras desde la app. Nosotros podemos suspender o dar de baja tu cuenta si incumples estos términos o si hacemos uso de nuestro derecho descrito en la sección 11\.

## **13\. Cambios en los términos**

Podemos actualizar estos términos. Publicaremos la versión vigente con su fecha de actualización y, en caso de cambios importantes, te lo notificaremos en la app o por correo. El uso continuado de la Aplicación después de los cambios implica su aceptación.

## **14\. Legislación aplicable y jurisdicción**

Estos Términos y Condiciones se rigen por las **leyes de los Estados Unidos Mexicanos**. Para su interpretación y cumplimiento, las partes se someten a la jurisdicción de los **tribunales competentes del Estado de Chiapas, México**, renunciando a cualquier otro fuero que pudiera corresponderles por su domicilio presente o futuro.

## **15\. Contacto**

Para dudas, aclaraciones, solicitudes de privacidad o reportes de abuso:

**Equipo AntFish** · **antfish-soporte@gmail.com**

---

Al utilizar AntFish confirmas que has leído y aceptas este Aviso de Privacidad y estos Términos y Condiciones.

