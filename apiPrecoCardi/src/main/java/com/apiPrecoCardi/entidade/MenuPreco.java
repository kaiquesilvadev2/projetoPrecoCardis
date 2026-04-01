package com.apiPrecoCardi.entidade;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_menu_preco")
public class MenuPreco {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome_pagote")
	private String nomePagote;
	private Double preco;
	
	@OneToMany
	@JoinColumn(name = "menu_preco_id")
	private List<Vantagem> listaVantagens = new ArrayList<>();

	public MenuPreco() {
		super();
	}

	public MenuPreco(Long id, String nomePagote, Double preco) {
		super();
		this.id = id;
		this.nomePagote = nomePagote;
		this.preco = preco;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomePagote() {
		return nomePagote;
	}

	public void setNomePagote(String nomePagote) {
		this.nomePagote = nomePagote;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public List<Vantagem> getListaVantagens() {
		return listaVantagens;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MenuPreco other = (MenuPreco) obj;
		return Objects.equals(id, other.id);
	}

}
