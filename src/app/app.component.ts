import { Component } from '@angular/core';

@Component({
  selector: 'mlabs-root',
  template: `
      <div class="container mt-3">
      <div class="row">
        <div class="col">
          <h2>Exemplo de componentes</h2>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Ação 1</a>
              <a class="dropdown-item" href="#">Ação 2</a>
              <a class="dropdown-item" href="#">Ação 3</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-1">
        <div class="col">
          <div class="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>Exemplo de alerta</strong> o botão de fechar funciona.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col">
          <h2>Exemplo de formulário</h2>
          <form>
            <div class="form-group">
              <label>Texto</label>
              <input type="text" class="form-control" placeholder="Placeholder campo texto">
            </div>

            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input">
              <label class="form-check-label">Checkbox</label>
            </div>

            <div class="form-group">
              <label>Combobox</label>
              <select class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div class="form-group">
              <label>Textarea</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Salvar</button>
            <button type="submit" class="btn btn-default ml-2">Cancelar</button>
          </form>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'social-networking-dashboard';
}
