package com.apiPrecoCardi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apiPrecoCardi.entidade.MenuPreco;
import com.apiPrecoCardi.repository.MenuPrecoRepository;

@Service
public class MenuPrecoService {

	@Autowired
	private MenuPrecoRepository repository;
	
	public List<MenuPreco> buscaTodos() {
		return repository.findAll();
	}
}
