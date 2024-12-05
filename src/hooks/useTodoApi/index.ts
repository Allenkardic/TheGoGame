import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import api from '../../api';
import {ITodo} from '../../components/TodoCard/interfaces';
const useGetTodo = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState([]);
  const getTodoApi = async () => {
    setLoading(true);
    try {
      const response = await api.get('todo');
      setData(response.data);
      return Promise.resolve({
        data: response,
      });
    } catch (e) {
      if (typeof e === 'string') {
        setError(e);
        throw new Error(e);
      } else if (e instanceof Error) {
        setError(e.message);
        throw new Error(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {loading, isSuccessful, error, data, getTodoApi};
};

const useDeleleTodo = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState('');

  const deleteTodoApi = async (id: string) => {
    setLoading(true);
    try {
      const response = await api.delete(`todo${id}`);
      setData(response.data);
      return Promise.resolve({
        data: response,
      });
    } catch (e) {
      if (typeof e === 'string') {
        setError(e);
        throw new Error(e);
      } else if (e instanceof Error) {
        setError(e.message);
        throw new Error(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {loading, isSuccessful, error, data, deleteTodoApi};
};

const useUpdateTodo = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState('');

  const updateTodoApi = async (id: string, payload: ITodo) => {
    setLoading(true);

    try {
      const response = await api.put(`todo/:${id}`, {payload});
      setData(response.data);
      setIsSuccessful(true);
      return Promise.resolve({
        data: response,
      });
    } catch (e) {
      if (typeof e === 'string') {
        setError(e);
        throw new Error(e);
      } else if (e instanceof Error) {
        setError(e.message);
        throw new Error(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {loading, isSuccessful, error, data, updateTodoApi};
};

// CREATE TODO API
const useCreateTodo = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState({});

  const createTodoApi = async (payload: ITodo) => {
    setLoading(true);
    try {
      const response = await api.post(`todo`, payload);
      setData(response.data);
      setIsSuccessful(true);
      setTimeout(() => {
        Toast.show({
          type: 'success',
          autoHide: true,
          text1: 'Todo created successfully',
          text2: 'Your data was saved successfully',
        });
      }, 1000);
      return Promise.resolve({
        data: response,
      });
    } catch (e) {
      if (typeof e === 'string') {
        setError(e);
        throw new Error(e);
      } else if (e instanceof Error) {
        setError(e.message);
        throw new Error(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {loading, isSuccessful, error, data, createTodoApi};
};

export {useGetTodo, useDeleleTodo, useUpdateTodo, useCreateTodo};
