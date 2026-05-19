Checklist para importación (dry-run antes de real):

1) Validar JSON Schema: ejecutar jsonschema validation para page.schema.json y section.schema.json.
2) Revisar manifest.json y verificar que todos los section_*.json y page_*.json estén presentes.
3) Preparar credenciales de WP (usuario con rol admin o application password para REST).
4) Ejecutar import_dry_run.py con el manifest para visualizar payloads.
5) Subir imágenes a WP Media (si se desea copia) o dejar URLs externas.
6) Ejecutar script de import real (cuando dispongas de admin). Hacer backup antes.
7) QA visual en staging.

Notas:
- Los archivos están agrupados en content_package.zip. Descomprimir y revisar.
- Por ahora las imágenes se descargaron y están en la carpeta images/ dentro del paquete.
