import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from './ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Button } from './ui/button';
import { api } from '@/api/api';

const todoShema = z.object({
  title: z.string().trim().min(2, { message: 'Titulo é obrigatório' }).max(50),
  description: z.string().trim().min(2, { message: 'Descrição é obrigatória' }),
});
const TodoItemForm = () => {
  const form = useForm<z.infer<typeof todoShema>>({
    resolver: zodResolver(todoShema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  async function onSubmit(data: z.infer<typeof todoShema>) {
    if (data) await api.post('/tasks', data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Crie um titulo para sua tarefa"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Descreva sua tarefa" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default TodoItemForm;
