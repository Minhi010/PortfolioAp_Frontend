import { Curso } from './Curso';
import { Eduformal } from './EduFormal';
import { ExpLaboral } from './ExpLaboral';
import { Habilidad } from './Habilidad';
import { Informacion } from './Informacion';
import { Proyecto } from './Proyecto';

export interface Persona {
  id: number;
  curso: Curso[];
  eduFormal: Eduformal[];
  expLaboral: ExpLaboral[];
  habilidad: Habilidad[];
  informacion: Informacion;
  proyecto: Proyecto[];
}
