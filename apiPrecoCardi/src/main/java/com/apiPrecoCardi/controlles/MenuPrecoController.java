package com.apiPrecoCardi.controlles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiPrecoCardi.entidade.MenuPreco;
import com.apiPrecoCardi.services.MenuPrecoService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/menuPrecos")
public class MenuPrecoController {

	@Autowired
	private MenuPrecoService service;
	
	@GetMapping
	public List<MenuPreco> buscaTodos() {
		return service.buscaTodos();
	}
}
