import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cadastro() {
  return (
    <>
        <Header />
            <main>
                <h1><span  className="badge text-bg-light">Cadastro</span></h1> <br></br>
                <form className="row g-3">
                <div className="col-md-3 m-2">
                    <label for="validationDefault01" className="form-label">Primeiro Nome</label>
                    <input type="text" className="form-control" id="validationDefault01"  required></input>
                </div>
                <div className="col-md-3 m-2">
                    <label for="validationDefault02" className="form-label">Ultimo Nome</label>
                    <input type="text" className="form-control" id="validationDefault02"  required></input>
                </div>
                <div className="col-md-3 m-2">
                    <label for="validationDefaultCpf" className="form-label">Data Nasc:</label>
                    <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">Nº:</span>
                    <input type="text" className="form-control" id="validationDefaultCpf" aria-describedby="inputGroupPrepend2" required></input>
                    </div>
                </div>
                <div className="col-md-2 m-2" >
                    <label for="validationDefaultTel" className="form-label">Telefone</label>
                    <input type="text" className="form-control" id="validationDefaultTel"  required></input>
                </div>
                <div className="col-md-2 m-2">
                    <label for="validationDefault04" className="form-label">Etinia</label>
                    <select className="form-select" id="validationDefault04" required>
                        <option selected disabled > </option>
                        <option>Branco</option>
                        <option>Pardo</option>
                        <option>Amarelo</option>
                        <option>Indigena</option>
                        <option>Negro</option>
                    </select>
                    </div>
                    <div className="col-md-2 m-2">
                    <label for="validationDefault03" className="form-label">Pais de Origem</label>
                    <input type="text" className="form-control" id="validationDefault03" required></input>
                    </div><br></br>
                <div class="col-md-2 m-2">
                    <label for="validationDefault03" className="form-label">Cidade</label>
                    <input type="text" className="form-control" id="validationDefault03" required></input>
                </div>
                <div className="col-md-2 m-2">
                    <label for="validationDefault04" className="form-label">Estado Onde Vive</label>
                    <select className="form-select" id="validationDefault04" required>
                    <option selected disabled > </option>
                    <option>SP</option>
                    <option>RJ</option>
                    <option>SC</option>
                    <option>PR</option>
                    <option>CE</option>
                    <option>PE</option>
                    <option>MG</option>
                    <option>AM</option>
                    <option>BA</option>
                    <option>MT</option>
                    <option>PA</option>
                    </select>
                </div>
                <div class="col-md-2 m-2">
                    <label for="validationDefault05" className="form-label">CEP</label>
                    <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend4">Nº:</span>
                    <input type="text" className="form-control" id="validationDefault05" required></input>
                </div>
                </div>
                <div className="col-md-5 m-2">
                    <label for="validationDefaultEmail" className="form-label">Digite seu E-mail:</label>
                    <input type="text" className="form-control" id="validationDefaultEmail"  required></input>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-md-3 m-2">
                    <label for="validationDefaultSenha" className="form-label">Senha:</label>
                    <input type="text" className="form-control" id="validationDefaultSenha"  required></input>
                    <span id="passwordHelpInline" className="form-text">
                        Deve conter de 8 a 20 caracteres.
                    </span>
                    </div>
                </div>
                <div className="col-12 m-2">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                    <label className="form-check-label" for="invalidCheck2">
                        Concordo com o Termo e Condições
                    </label>
                    </div>
                </div>
                <div className="col-12 m-2">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
                </form>
            </main>
        <Footer />
    </>
  );
}