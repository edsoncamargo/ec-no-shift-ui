# ECNoShiftUI

🛑 Evite o **layout shift** ao esconder a scrollbar do `body` em modais, overlays e outros componentes com bloqueio de rolagem.

**Leve, sem dependências e fácil de integrar.**

---

## 📦 Instalação

```bash
npm install ec-no-shift-ui
```

ou via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/ec-no-shift-ui@latest/dist/ec-no-shift-ui.min.js"></script>
```

---

## 🚀 Uso Básico

### Módulo ES

```js
import { ECCorp } from 'ec-no-shift-ui';

const ui = new ECCorp.ECNoShiftUI();

ui.applyNoShiftScrollLock();
ui.enableBodyScroll();
```

---

### CDN / Script Global

```html
<script src="ec-no-shift-ui.min.js"></script>
<script>
  const ui = new ECCorp.ECNoShiftUI();

  document
    .getElementById('seu-componente')
    .addEventListener('open', () => ui.applyNoShiftScrollLock());
  document
    .getElementById('seu-componente')
    .addEventListener('close', () => ui.enableBodyScroll());
</script>
```

---

## 💡 Quando usar?

Sempre que você:

- Esconder a scrollbar usando `overflow: hidden` no `body`
- Abrir Modais, Side Sheets, Overlays, Drag & Drops, Bottom Sheets;
  - Essa solução foi pensada para ser genérica e reutilizável. Em qualquer lugar que você vá esconder o scroll, considere aplicar o ECNoShiftUI para preservar a fluidez visual da sua interface.
- Quiser evitar o "pulo" visual causado pela mudança na largura da viewport

---

## 🧠 Como funciona?

O `ECNoShiftUI` calcula dinamicamente a largura (ou altura) da scrollbar e aplica um `padding` compensatório no `body`, mantendo a largura da viewport constante — e evitando qualquer "tremedeira".

---

## 🧱 Exemplo real

Leia o artigo completo e veja o exemplo em funcionamento:

👉 [A forma certa de esconder a scrollbar sem quebrar seu layout (Layout Shift ❌)](https://medium.com/@edsoncamargo.dev/a-forma-certa-de-esconder-a-scrollbar-sem-quebrar-seu-layout-layout-shift-c1073d8cab37)

---

## 🔒 API

| Método                     | Descrição                                                |
| -------------------------- | -------------------------------------------------------- |
| `applyNoShiftScrollLock()` | Aplica `overflow: hidden` no body e compensa com padding |
| `enableBodyScroll()`       | Restaura os paddings e libera o scroll                   |

---

## 📄 Licença

MIT

---

## 🙋‍♂️ Autor

Criado por **Edson Camargo Menezes**  
🔗 [edsoncamargo.dev](https://edsoncamargo.dev)

Se você gostou dessa solução, considere visitar meu portfólio ou me seguir no [Medium](https://medium.com/@edsoncamargo.dev) para mais artigos sobre desenvolvimento frontend.

---
