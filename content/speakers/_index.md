---
title: "Speakers"
description: "Meet the incredible speakers who will be sharing their knowledge at our event."
---

## Featured Speakers

{{ range .Pages }}
### [{{ .Title }}]({{ .RelPermalink }})

{{ if .Params.photoURL }}
![{{ .Title }}]({{ .Params.photoURL }})
{{ end }}

{{ .Params.shortBio }}

{{ end }}

