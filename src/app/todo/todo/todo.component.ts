import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos$ = this.todo.getTodos().pipe(tap((data) => console.log(data)));
  user$ = this.auth.user$;
  lists = ['todo', 'doing', 'done'];
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(10)]],
  });
  constructor(
    private todo: TodoService,
    private auth: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  createTodo(uid: string) {
    const name = this.form.controls.name.value;
    this.todo.createTodo(name, uid);
    this.form.reset();
    this.form.controls.name.setErrors({ required: null });
  }

}
